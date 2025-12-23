import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [city, setCity] = useState("austin");
  const [projectType, setProjectType] = useState("");

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else {
      navigate("/dashboard");
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
    } else {
      navigate("/sign-in");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-card rounded-xl border border-border overflow-hidden shadow-sm">
        <div className="flex flex-col lg:flex-row min-h-[480px]">
          {/* Left - Branding Panel */}
          <div className="lg:w-2/5 bg-foreground p-8 flex flex-col justify-between relative overflow-hidden">
            {/* Blueprint Grid Pattern */}
            <div 
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `
                  linear-gradient(hsl(var(--background) / 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, hsl(var(--background) / 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '24px 24px',
              }}
            />
            
            <div className="relative z-10">
              {/* Logo */}
              <div className="flex items-center gap-2.5 mb-8">
                <div className="w-9 h-9 rounded-lg bg-background flex items-center justify-center">
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-5 h-5 text-foreground"
                    fill="currentColor"
                  >
                    <path d="M12 2C10.5 2 9 3.5 9 5c0 1.5 1.5 3 3 4.5 1.5-1.5 3-3 3-4.5 0-1.5-1.5-3-3-3zm-7 9c-1.5 1.5-3 3-3 4.5C2 17 3.5 19 5.5 19c1.5 0 3-1 4.5-2.5-2-1.5-4-3.5-5-5.5zm14 0c-1 2-3 4-5 5.5 1.5 1.5 3 2.5 4.5 2.5 2 0 3.5-2 3.5-3.5 0-1.5-1.5-3-3-4.5zM12 11c-2 2-4 4-5 6 1.5 2.5 3.5 4 5 5 1.5-1 3.5-2.5 5-5-1-2-3-4-5-6z"/>
                  </svg>
                </div>
                <span className="font-display font-semibold text-background">Permit Shark</span>
              </div>

              <h2 className="font-display text-xl font-bold text-background mb-2">
                Let's set up your account
              </h2>
              <p className="text-background/70 text-sm">
                A few quick details to personalize your experience.
              </p>
            </div>

            <div className="relative z-10">
              <div className="bg-background/5 backdrop-blur-sm rounded-lg p-4 border border-background/10">
                <blockquote className="text-sm text-background/90 mb-3">
                  "The compliance reports alone saved us 40+ hours per project."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center text-xs font-medium text-background">
                    MR
                  </div>
                  <div>
                    <p className="text-xs font-medium text-background">Michael Rivera</p>
                    <p className="text-xs text-background/50">Director, BuildRight Construction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form Panel */}
          <div className="flex-1 p-8 flex flex-col">
            {/* Progress */}
            <div className="flex items-center gap-2 mb-6">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step >= 1 ? 'bg-sidebar-primary text-sidebar-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                {step > 1 ? <Check className="w-4 h-4" /> : "1"}
              </div>
              <div className={`flex-1 h-0.5 ${step > 1 ? 'bg-sidebar-primary' : 'bg-muted'}`} />
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step >= 2 ? 'bg-sidebar-primary text-sidebar-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                2
              </div>
            </div>

            {step === 1 ? (
              <div className="flex-1 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-1">
                    Tell us about yourself
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Step 1 of 2
                  </p>
                </div>

                <div className="space-y-4 flex-1">
                  <div className="space-y-2">
                    <Label htmlFor="role" className="text-sm font-medium">
                      Your Role
                    </Label>
                    <Select value={role} onValueChange={setRole}>
                      <SelectTrigger className="h-10">
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
                    <Label htmlFor="company" className="text-sm font-medium">
                      Company Name <span className="text-muted-foreground">(optional)</span>
                    </Label>
                    <Input 
                      id="company"
                      placeholder="Your company name" 
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="h-10"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-1">
                    Set your preferences
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Step 2 of 2
                  </p>
                </div>

                <div className="space-y-4 flex-1">
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-sm font-medium">
                      Default City
                    </Label>
                    <Select value={city} onValueChange={setCity}>
                      <SelectTrigger className="h-10">
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

                  <div className="space-y-2">
                    <Label htmlFor="projectType" className="text-sm font-medium">
                      Preferred Project Type <span className="text-muted-foreground">(optional)</span>
                    </Label>
                    <Select value={projectType} onValueChange={setProjectType}>
                      <SelectTrigger className="h-10">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">Residential</SelectItem>
                        <SelectItem value="commercial">Commercial</SelectItem>
                        <SelectItem value="mixed-use">Mixed Use</SelectItem>
                        <SelectItem value="industrial">Industrial</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-6 border-t border-border mt-auto">
              <Button variant="ghost" onClick={handleBack} className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
              <Button onClick={handleNext} className="gap-2 bg-sidebar-primary hover:bg-sidebar-primary/90">
                {step === 2 ? "Finish Setup" : "Continue"}
                {step === 1 && <ArrowRight className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
