import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface OnboardingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const OnboardingModal = ({ open, onOpenChange }: OnboardingModalProps) => {
  const [role, setRole] = useState("");
  const [city, setCity] = useState("austin");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center space-y-2">
          <div className="flex justify-center mb-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <svg 
                viewBox="0 0 24 24" 
                className="w-6 h-6 text-primary-foreground"
                fill="currentColor"
              >
                <path d="M12 2C10.5 2 9 3.5 9 5c0 1.5 1.5 3 3 4.5 1.5-1.5 3-3 3-4.5 0-1.5-1.5-3-3-3zm-7 9c-1.5 1.5-3 3-3 4.5C2 17 3.5 19 5.5 19c1.5 0 3-1 4.5-2.5-2-1.5-4-3.5-5-5.5zm14 0c-1 2-3 4-5 5.5 1.5 1.5 3 2.5 4.5 2.5 2 0 3.5-2 3.5-3.5 0-1.5-1.5-3-3-4.5zM12 11c-2 2-4 4-5 6 1.5 2.5 3.5 4 5 5 1.5-1 3.5-2.5 5-5-1-2-3-4-5-6z"/>
              </svg>
            </div>
          </div>
          <DialogTitle className="text-xl font-display">Welcome to Permit Shark</DialogTitle>
          <DialogDescription>
            Let's set up your account to get started.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Your Role</label>
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger className="h-11">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="architect">Architect</SelectItem>
                <SelectItem value="contractor">General Contractor</SelectItem>
                <SelectItem value="developer">Developer / Owner</SelectItem>
                <SelectItem value="engineer">Engineer</SelectItem>
                <SelectItem value="permit-expediter">Permit Expediter</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Default City</label>
            <Select value={city} onValueChange={setCity}>
              <SelectTrigger className="h-11">
                <SelectValue placeholder="Select a city" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="austin">Austin, TX</SelectItem>
                <SelectItem value="houston">Houston, TX</SelectItem>
                <SelectItem value="dallas">Dallas, TX</SelectItem>
                <SelectItem value="san-antonio">San Antonio, TX</SelectItem>
                <SelectItem value="denver">Denver, CO</SelectItem>
                <SelectItem value="phoenix">Phoenix, AZ</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button className="w-full h-11" onClick={() => onOpenChange(false)}>
          Get Started
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default OnboardingModal;
