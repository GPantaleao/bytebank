"use client";

import React from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { Button } from "./Button";

interface ModalProps {
  title: string;
  description: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const Modal = ({
  title,
  description,
  confirmLabel = "Confirmar",
  cancelLabel = "Cancelar",
  onConfirm,
  trigger,
  open,
  onOpenChange
}: ModalProps) => (
  <AlertDialog.Root open={open} onOpenChange={onOpenChange}>
    {trigger && <AlertDialog.Trigger asChild>{trigger}</AlertDialog.Trigger>}
    <AlertDialog.Portal>
      <AlertDialog.Overlay className="bg-black/50 fixed inset-0 z-40 animate-in fade-in duration-200" />
      <AlertDialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-strong z-50 w-[90vw] max-w-md animate-in zoom-in-95 duration-200">
        <AlertDialog.Title className="text-xl font-bold text-gray-800 mb-2">
          {title}
        </AlertDialog.Title>
        <AlertDialog.Description className="text-gray-600 mb-6 leading-relaxed">
          {description}
        </AlertDialog.Description>
        <div className="flex justify-end gap-8">
          <AlertDialog.Cancel asChild>
            <Button variant="default" outline label={cancelLabel} className="py-2" />
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild>
            <Button variant="danger" label={confirmLabel} onClick={onConfirm} className="py-2" />
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>
);
