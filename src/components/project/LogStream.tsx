import { useEffect, useRef } from "react";
import { Loader2, CheckCircle2, AlertTriangle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export type LogStatus = "loading" | "success" | "warning" | "error";

export interface LogEntry {
  id: string;
  timestamp: string;
  status: LogStatus;
  message: string;
  subData?: Record<string, unknown>;
}

interface LogStreamProps {
  logs: LogEntry[];
}

const statusConfig: Record<LogStatus, { icon: typeof Loader2; color: string }> = {
  loading: { icon: Loader2, color: "text-blue-400" },
  success: { icon: CheckCircle2, color: "text-emerald-400" },
  warning: { icon: AlertTriangle, color: "text-amber-400" },
  error: { icon: XCircle, color: "text-rose-400" },
};

const LogStream = ({ logs }: LogStreamProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="h-full flex flex-col bg-slate-950">
      {/* Header */}
      <div className="flex-shrink-0 px-4 py-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
            System Logs
          </span>
        </div>
      </div>

      {/* Log entries */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-2"
      >
        {logs.length === 0 && (
          <div className="flex items-center justify-center h-full">
            <p className="text-slate-600 text-sm font-mono">
              Awaiting file upload...
            </p>
          </div>
        )}

        {logs.map((log, index) => {
          const config = statusConfig[log.status];
          const Icon = config.icon;
          
          return (
            <div
              key={log.id}
              className={cn(
                "animate-fade-in",
                "flex gap-3 p-2 rounded-md bg-slate-900/50 border border-slate-800/50"
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Timestamp */}
              <span className="text-xs font-mono text-slate-500 flex-shrink-0 pt-0.5">
                {log.timestamp}
              </span>

              {/* Status Icon */}
              <Icon 
                className={cn(
                  "w-4 h-4 flex-shrink-0 mt-0.5",
                  config.color,
                  log.status === "loading" && "animate-spin"
                )}
              />

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-mono text-slate-200 break-words">
                  {log.message}
                </p>
                {log.subData && (
                  <pre className="mt-1 text-xs font-mono text-slate-500 overflow-x-auto">
                    {JSON.stringify(log.subData, null, 2)}
                  </pre>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LogStream;
