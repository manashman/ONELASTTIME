import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function RulebookPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup on initial load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md bg-space-900/90 backdrop-blur-md border-space-700 text-white">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-2xl font-orbitron text-primary">RULEBOOK IS OUT NOW!</DialogTitle>
          <DialogClose asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-md hover:bg-white/10">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogClose>
        </DialogHeader>
        <div className="flex flex-col items-center gap-6 py-4">
          <p className="text-center text-gray-300 font-inter">
            The official rulebook for Pradharshini 25 is now available. 
            Check out the guidelines for all events and prepare to shine!
          </p>
          <Button 
            className="w-full bg-primary hover:bg-primary/90 text-white font-orbitron"
            onClick={() => {
              window.open("/attached_assets/PRADHARSHINI'24 RULEBOOK_1764269238394.pdf", "_blank");
              setIsOpen(false);
            }}
          >
            VIEW RULEBOOK
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
