import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left - Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm">
          {/* Logo */}
          <div className="flex items-center gap-2.5 mb-8">
            <div className="w-9 h-9 rounded-lg bg-sidebar-primary flex items-center justify-center">
              <svg 
                viewBox="0 0 24 24" 
                className="w-5 h-5 text-sidebar-primary-foreground"
                fill="currentColor"
              >
                <path d="M12 2C10.5 2 9 3.5 9 5c0 1.5 1.5 3 3 4.5 1.5-1.5 3-3 3-4.5 0-1.5-1.5-3-3-3zm-7 9c-1.5 1.5-3 3-3 4.5C2 17 3.5 19 5.5 19c1.5 0 3-1 4.5-2.5-2-1.5-4-3.5-5-5.5zm14 0c-1 2-3 4-5 5.5 1.5 1.5 3 2.5 4.5 2.5 2 0 3.5-2 3.5-3.5 0-1.5-1.5-3-3-4.5zM12 11c-2 2-4 4-5 6 1.5 2.5 3.5 4 5 5 1.5-1 3.5-2.5 5-5-1-2-3-4-5-6z"/>
              </svg>
            </div>
            <span className="font-display font-semibold text-foreground">Permit Shark</span>
          </div>

          {/* Header */}
          <div className="mb-6">
            <h1 className="text-xl font-display font-semibold text-foreground mb-1">
              Sign in to your account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your credentials to access your dashboard.
            </p>
          </div>

          {/* Form */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email address
              </Label>
              <Input 
                id="email"
                type="email" 
                placeholder="you@company.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-10"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
                <Link to="/forgot-password" className="text-xs text-sidebar-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input 
                id="password"
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-10"
              />
            </div>

            <Button 
              className="w-full h-10 bg-sidebar-primary hover:bg-sidebar-primary/90"
              onClick={() => navigate("/onboarding")}
            >
              Sign In
            </Button>

            <div className="relative my-4">
              <Separator />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-xs text-muted-foreground">
                or
              </span>
            </div>

            <Button variant="outline" className="w-full h-10" onClick={() => navigate("/onboarding")}>
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </Button>
          </div>

          {/* Footer */}
          <p className="text-sm text-muted-foreground text-center mt-6">
            Don't have an account?{" "}
            <Link to="/sign-up" className="text-sidebar-primary font-medium hover:underline">
              Create account
            </Link>
          </p>
        </div>
      </div>

      {/* Right - Branded Panel */}
      <div className="hidden lg:flex w-2/5 bg-foreground p-10 flex-col justify-between relative overflow-hidden">
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
          <h2 className="font-display text-2xl font-bold text-background mb-3">
            Permit compliance,<br />made simple.
          </h2>
          <p className="text-background/70 text-sm max-w-xs">
            Upload blueprints. Get instant compliance reports. Save weeks of manual review.
          </p>
        </div>

        <div className="relative z-10">
          <div className="bg-background/5 backdrop-blur-sm rounded-lg p-4 border border-background/10">
            <blockquote className="text-sm text-background/90 mb-3">
              "Permit Shark transformed our permit submission process. What used to take weeks now takes hours."
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center text-xs font-medium text-background">
                SC
              </div>
              <div>
                <p className="text-xs font-medium text-background">Sarah Chen</p>
                <p className="text-xs text-background/50">Principal Architect, Chen & Associates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
