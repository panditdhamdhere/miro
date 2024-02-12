"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { useRenameModal } from "@/store/use-rename-modal";

export const RenameModal = () => {
  const { isOpen, onClose, initialValues } = useRenameModal();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Board Title</DialogTitle>
        </DialogHeader>
        <DialogDescription>Enter a new title for this board.</DialogDescription>
        
      </DialogContent>
    </Dialog>
  );
};
