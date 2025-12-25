import { useState, useCallback } from "react";
import { Upload, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FileUploadZoneProps {
  onFileSelect: (file: File) => void;
  zoningCode?: string;
}

const FileUploadZone = ({ onFileSelect, zoningCode = "Austin SF-3" }: FileUploadZoneProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type === "application/pdf") {
      onFileSelect(file);
    }
  }, [onFileSelect]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  }, [onFileSelect]);

  return (
    <div className="flex flex-col items-center justify-center h-full p-8">
      <div className="max-w-md w-full space-y-8 text-center">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-2xl font-display font-bold text-foreground">
            Start Compliance Check
          </h1>
          <p className="text-muted-foreground">
            Upload a PDF floor plan. Analyzing against{" "}
            <span className="font-semibold text-foreground">{zoningCode}</span>{" "}
            Zoning Code.
          </p>
        </div>

        {/* Drop Zone */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={cn(
            "relative border-2 border-dashed rounded-xl p-12 transition-all duration-200",
            isDragging 
              ? "border-primary bg-primary/5 scale-[1.02]" 
              : "border-border hover:border-primary/50 hover:bg-muted/50"
          )}
        >
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileInput}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          
          <div className="flex flex-col items-center gap-4">
            <div className={cn(
              "w-16 h-16 rounded-full flex items-center justify-center transition-colors",
              isDragging ? "bg-primary/10" : "bg-muted"
            )}>
              {isDragging ? (
                <FileText className="w-8 h-8 text-primary" />
              ) : (
                <Upload className="w-8 h-8 text-muted-foreground" />
              )}
            </div>
            
            <div>
              <p className="font-medium text-foreground">
                {isDragging ? "Drop your file here" : "Drag & drop your floor plan"}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                PDF files only, up to 50MB
              </p>
            </div>
          </div>
        </div>

        {/* Or Divider */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs uppercase tracking-wider text-muted-foreground">or</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Manual Select */}
        <Button 
          variant="outline" 
          className="w-full gap-2"
          onClick={() => document.querySelector<HTMLInputElement>('input[type="file"]')?.click()}
        >
          <FileText className="w-4 h-4" />
          Select File
          <ArrowRight className="w-4 h-4 ml-auto" />
        </Button>

        {/* Info Cards */}
        <div className="grid grid-cols-3 gap-3 pt-4">
          {[
            { label: "Analysis Time", value: "~2 min" },
            { label: "Check Points", value: "12+" },
            { label: "AI Confidence", value: "98%" },
          ].map((stat) => (
            <div key={stat.label} className="p-3 rounded-lg bg-muted/50 border border-border">
              <p className="text-lg font-mono font-semibold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FileUploadZone;
