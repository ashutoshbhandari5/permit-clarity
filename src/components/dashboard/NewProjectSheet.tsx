import { useState } from "react";
import { Upload, X, FileText, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface NewProjectSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const cities = [
  "Austin",
  "Houston",
  "Dallas",
  "San Antonio",
  "Fort Worth",
  "El Paso",
];

const NewProjectSheet = ({ open, onOpenChange }: NewProjectSheetProps) => {
  const [projectName, setProjectName] = useState("");
  const [city, setCity] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [dragOver, setDragOver] = useState(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = () => {
    if (!projectName || !city || !file) return;
    
    setUploading(true);
    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setUploading(false);
          setUploadProgress(0);
          setProjectName("");
          setCity("");
          setFile(null);
          onOpenChange(false);
        }, 500);
      }
    }, 200);
  };

  const handleCancel = () => {
    setProjectName("");
    setCity("");
    setFile(null);
    setUploading(false);
    setUploadProgress(0);
    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="font-display">New Project</SheetTitle>
          <SheetDescription>
            Upload a blueprint to start a compliance check.
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-5">
          {/* Project Name */}
          <div className="space-y-2">
            <Label htmlFor="project-name" className="text-sm font-medium">
              Project Name
            </Label>
            <Input
              id="project-name"
              placeholder="e.g., 1204 Elm St"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="h-10"
            />
          </div>

          {/* City */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">City</Label>
            <Select value={city} onValueChange={setCity}>
              <SelectTrigger className="h-10">
                <SelectValue placeholder="Select city" />
              </SelectTrigger>
              <SelectContent>
                {cities.map((c) => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* File Upload */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Blueprint</Label>
            {file ? (
              <div className="flex items-center gap-3 p-3 border border-border rounded-lg bg-muted/50">
                <FileText className="h-5 w-5 text-muted-foreground" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{file.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8"
                  onClick={() => setFile(null)}
                  disabled={uploading}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <div
                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={handleDrop}
                className={cn(
                  "border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer",
                  dragOver 
                    ? "border-sidebar-primary bg-sidebar-accent" 
                    : "border-border hover:border-muted-foreground"
                )}
              >
                <input
                  type="file"
                  accept=".pdf,.dwg,.png,.jpg,.jpeg"
                  onChange={handleFileSelect}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">
                    Drop your blueprint here
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    or click to browse
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    PDF, DWG, PNG, JPG up to 50MB
                  </p>
                </label>
              </div>
            )}
          </div>

          {/* Upload Progress */}
          {uploading && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Uploading...</span>
                <span className="font-medium text-foreground">{uploadProgress}%</span>
              </div>
              <Progress value={uploadProgress} className="h-1.5" />
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex gap-3 mt-8">
          <Button 
            variant="outline" 
            onClick={handleCancel}
            disabled={uploading}
            className="flex-1"
          >
            Cancel
          </Button>
          <Button 
            onClick={handleSubmit}
            disabled={!projectName || !city || !file || uploading}
            className="flex-1 bg-sidebar-primary hover:bg-sidebar-primary/90"
          >
            {uploading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Uploading
              </>
            ) : (
              "Start Analysis"
            )}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NewProjectSheet;
