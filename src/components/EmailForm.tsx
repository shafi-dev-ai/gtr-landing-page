import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabaseClient";

interface EmailFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  source?: string;
}

const EmailForm = ({ open, onOpenChange, source = "unknown" }: EmailFormProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    if (!supabase) {
      toast({
        title: "Connection error",
        description: "Unable to connect right now. Please try again shortly.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("waitlist_signups").insert({
        email: email.trim(),
        source,
      });

      if (error) {
        const description =
          error.code === "23505"
            ? "This email is already on the waitlist."
            : "We couldn't save your email right now. Please try again.";

        toast({
          title: "Something went wrong",
          description,
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Success!",
        description: "You've been added to the early access list.",
      });
      
      setEmail("");
      onOpenChange(false);
    } catch (err) {
      toast({
        title: "Network error",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display">Get Early Access</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Join the waitlist to be among the first to experience GTRX.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-background border-border"
            required
          />
          <Button
            type="submit"
            variant="hero"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Join Waitlist"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EmailForm;
