import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const SignIn = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <Card className="w-full max-w-md border border-border shadow-lg">
        <CardHeader className="space-y-4 text-center pb-2">
          {/* Logo */}
          <div className="flex justify-center">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <svg 
                viewBox="0 0 24 24" 
                className="w-7 h-7 text-primary-foreground"
                fill="currentColor"
              >
                <path d="M12 2C10.5 2 9 3.5 9 5c0 1.5 1.5 3 3 4.5 1.5-1.5 3-3 3-4.5 0-1.5-1.5-3-3-3zm-7 9c-1.5 1.5-3 3-3 4.5C2 17 3.5 19 5.5 19c1.5 0 3-1 4.5-2.5-2-1.5-4-3.5-5-5.5zm14 0c-1 2-3 4-5 5.5 1.5 1.5 3 2.5 4.5 2.5 2 0 3.5-2 3.5-3.5 0-1.5-1.5-3-3-4.5zM12 11c-2 2-4 4-5 6 1.5 2.5 3.5 4 5 5 1.5-1 3.5-2.5 5-5-1-2-3-4-5-6z"/>
              </svg>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-display font-semibold text-foreground">Permit Shark</h1>
            <p className="text-muted-foreground text-sm mt-1">Sign in to your dashboard</p>
          </div>
        </CardHeader>
        <CardContent className="space-y-6 pt-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              Email address
            </label>
            <Input 
              id="email"
              type="email" 
              placeholder="you@company.com" 
              className="h-11"
            />
          </div>
          <Button className="w-full h-11">
            Continue
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;
