import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import LogStream, { LogEntry, LogStatus, ViewMode } from "@/components/project/LogStream";
import FileUploadZone from "@/components/project/FileUploadZone";
import AuditChecklist, { CheckItem, CheckStatus } from "@/components/project/AuditChecklist";
import ChatInput from "@/components/project/ChatInput";
import { cn } from "@/lib/utils";

type AuditState = "upload" | "processing" | "complete";

// Violation markers for PDF visualization
const VIOLATION_MARKERS = [
  {
    id: "impervious",
    label: "Driveway Area: 127 sq ft",
    detail: "(Excess - 3% over limit)",
    position: { x: 38, y: 500, width: 128, height: 64 },
  },
];

// Simulation data
const INITIAL_CHECKS: CheckItem[] = [
  {
    id: "setbacks",
    title: "Site Setbacks",
    status: "pending",
    rule: "Min 25ft front, 5ft side",
    measured: "30ft front, 6ft side",
  },
  {
    id: "height",
    title: "Building Height",
    status: "pending",
    rule: "Max 35ft from grade",
    measured: "32ft measured",
  },
  {
    id: "impervious",
    title: "Impervious Cover",
    status: "pending",
    rule: "Max 45% lot coverage",
    measured: "48% detected",
    citation: "Section 25-2-492",
    citationUrl: "https://library.municode.com/tx/austin/codes/code_of_ordinances",
    tip: "Consider using permeable pavers for the driveway to reduce calculated impervious cover by up to 50%.",
  },
  {
    id: "parking",
    title: "Parking Requirements",
    status: "pending",
    rule: "Min 2 covered spaces",
    measured: "2 spaces confirmed",
  },
];

const SIMULATION_LOGS: Array<{ delay: number; log: Omit<LogEntry, "id">; checkUpdate?: { id: string; status: CheckStatus } }> = [
  { delay: 500, log: { timestamp: "00:00.50", status: "loading", message: "> Initializing Austin Zoning Module (v2.4)..." } },
  { delay: 1500, log: { timestamp: "00:01.50", status: "success", message: "> Module loaded. Connecting to GIS database...", subData: { module: "austin-sf3", version: "2.4.1" } } },
  { delay: 2500, log: { timestamp: "00:02.50", status: "success", message: "> OCR Extraction Complete. Scale detected: 1/4\" = 1'.", subData: { pages: 3, confidence: 0.97 } } },
  { delay: 3500, log: { timestamp: "00:03.50", status: "loading", message: "> Extracting vector geometry from floor plan..." } },
  { delay: 4500, log: { timestamp: "00:04.50", status: "success", message: "> Geometry extracted. Checking Site Setbacks...", subData: { layers: ["setbacks", "lot-boundary", "structure"] } }, checkUpdate: { id: "setbacks", status: "processing" } },
  { delay: 5500, log: { timestamp: "00:05.50", status: "success", message: "> ✓ Site Setbacks: COMPLIANT. Front: 30ft (req: 25ft), Side: 6ft (req: 5ft)." }, checkUpdate: { id: "setbacks", status: "pass" } },
  { delay: 6000, log: { timestamp: "00:06.00", status: "loading", message: "> Analyzing Building Height from elevation drawings..." }, checkUpdate: { id: "height", status: "processing" } },
  { delay: 7000, log: { timestamp: "00:07.00", status: "success", message: "> ✓ Building Height: COMPLIANT. 32ft measured (max: 35ft)." }, checkUpdate: { id: "height", status: "pass" } },
  { delay: 7500, log: { timestamp: "00:07.50", status: "loading", message: "> Calculating Impervious Cover percentage..." }, checkUpdate: { id: "impervious", status: "processing" } },
  { delay: 8500, log: { timestamp: "00:08.50", status: "warning", message: "> WARN: Driveway area exceeds non-porous surface limit.", subData: { calculated: "48%", allowed: "45%", excess: "127 sq ft" } } },
  { delay: 9000, log: { timestamp: "00:09.00", status: "error", message: "> ✗ Impervious Cover: NON-COMPLIANT. 48% detected (max: 45%)." }, checkUpdate: { id: "impervious", status: "fail" } },
  { delay: 9500, log: { timestamp: "00:09.50", status: "loading", message: "> Verifying Parking Requirements..." }, checkUpdate: { id: "parking", status: "processing" } },
  { delay: 10500, log: { timestamp: "00:10.50", status: "success", message: "> ✓ Parking: COMPLIANT. 2 covered spaces detected." }, checkUpdate: { id: "parking", status: "pass" } },
  { delay: 11500, log: { timestamp: "00:11.50", status: "success", message: "> Audit Complete. 1 violation found. Report generated.", subData: { passed: 3, failed: 1, warnings: 1 } } },
];

const Project = () => {
  const navigate = useNavigate();
  const [auditState, setAuditState] = useState<AuditState>("upload");
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [checks, setChecks] = useState<CheckItem[]>(INITIAL_CHECKS);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [fileName, setFileName] = useState<string>("");
  const [viewMode, setViewMode] = useState<ViewMode>("terminal");
  const [activeViolation, setActiveViolation] = useState<string | null>(null);

  const handleFileSelect = useCallback((file: File) => {
    setFileName(file.name);
    setAuditState("processing");
    setViewMode("terminal"); // Ensure terminal view during processing
    startSimulation();
  }, []);

  const startSimulation = useCallback(() => {
    let logIndex = 0;
    const totalSteps = SIMULATION_LOGS.length;

    SIMULATION_LOGS.forEach((item, index) => {
      setTimeout(() => {
        // Add log
        setLogs((prev) => [
          ...prev,
          { ...item.log, id: `log-${index}` },
        ]);

        // Update check status if needed
        if (item.checkUpdate) {
          setChecks((prev) =>
            prev.map((check) =>
              check.id === item.checkUpdate!.id
                ? { ...check, status: item.checkUpdate!.status }
                : check
            )
          );

          // Auto-expand failed items
          if (item.checkUpdate.status === "fail") {
            setExpandedItems((prev) => [...prev, item.checkUpdate!.id]);
          }
        }

        // Update progress
        logIndex++;
        setProgress(Math.round((logIndex / totalSteps) * 100));

        // Check if complete
        if (index === SIMULATION_LOGS.length - 1) {
          setTimeout(() => {
            setAuditState("complete");
            setViewMode("visual"); // Auto-switch to visual proof when done
            setActiveViolation("impervious"); // Highlight the violation
          }, 500);
        }
      }, item.delay);
    });
  }, []);

  const handleChatSend = (message: string) => {
    console.log("Chat message:", message);
    // Future: integrate with AI chat
  };

  const handleViolationClick = useCallback((itemId: string) => {
    setViewMode("visual");
    setActiveViolation(itemId);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />

      {/* Main Content */}
      <main className="lg:ml-60 min-h-screen pt-14 lg:pt-0">
        {/* Header */}
        <header className="h-14 border-b border-border flex items-center px-6 gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/dashboard")}
            className="flex-shrink-0"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div className="flex-1 min-w-0">
            <h1 className="text-lg font-display font-semibold text-foreground truncate">
              {fileName || "New Compliance Check"}
            </h1>
            {auditState !== "upload" && (
              <p className="text-xs text-muted-foreground">
                {auditState === "processing" ? "Analysis in progress..." : "Audit complete"}
              </p>
            )}
          </div>
          {fileName && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">{fileName}</span>
            </div>
          )}
        </header>

        {/* Split Panel Layout */}
        <div className="flex h-[calc(100vh-3.5rem)] lg:h-[calc(100vh-3.5rem)]">
          {/* Left Panel - Audit UI */}
          <div className="flex-1 flex flex-col overflow-hidden border-r border-border">
            {auditState === "upload" ? (
              <FileUploadZone onFileSelect={handleFileSelect} />
            ) : (
              <>
                {/* Scrollable Checklist */}
                <div className="flex-1 overflow-y-auto p-6">
                  <AuditChecklist
                    items={checks}
                    progress={progress}
                    expandedItems={expandedItems}
                    onItemClick={handleViolationClick}
                  />
                </div>

                {/* Chat Input - Only show when complete */}
                {auditState === "complete" && (
                  <ChatInput onSend={handleChatSend} />
                )}
              </>
            )}
          </div>

          {/* Right Panel - Logs/Visual */}
          <div className="hidden lg:flex w-1/2 max-w-xl flex-col">
            <LogStream 
              logs={logs}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              fileName={fileName}
              activeViolation={activeViolation}
              violations={VIOLATION_MARKERS}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Project;
