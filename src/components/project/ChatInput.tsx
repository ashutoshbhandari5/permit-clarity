import { useState } from "react";
import { Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

const ChatInput = ({ onSend, disabled }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSend(message.trim());
      setMessage("");
    }
  };

  const suggestions = [
    "How can I reduce impervious cover?",
    "What permits do I need?",
    "Explain the setback rules",
  ];

  return (
    <div className="border-t border-border bg-card p-4 space-y-3">
      {/* Suggestions */}
      <div className="flex flex-wrap gap-2">
        {suggestions.map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => setMessage(suggestion)}
            className={cn(
              "px-3 py-1.5 text-xs rounded-full border border-border",
              "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground",
              "transition-colors"
            )}
          >
            {suggestion}
          </button>
        ))}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="flex-1 relative">
          <Sparkles className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask about these violations..."
            disabled={disabled}
            className={cn(
              "w-full pl-10 pr-4 py-2.5 rounded-lg",
              "bg-muted border border-border",
              "text-sm text-foreground placeholder:text-muted-foreground",
              "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",
              "disabled:opacity-50 disabled:cursor-not-allowed"
            )}
          />
        </div>
        <Button 
          type="submit" 
          size="icon"
          disabled={!message.trim() || disabled}
          className="flex-shrink-0"
        >
          <Send className="w-4 h-4" />
        </Button>
      </form>
    </div>
  );
};

export default ChatInput;
