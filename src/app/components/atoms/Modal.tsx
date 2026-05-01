"use client";

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Button } from "./Button";

interface ModalProps {
  variant?: 'info' | 'danger' | 'warning' | 'success' | 'default';
  title?: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
  maxWidth?: string;
  showCloseButton?: boolean;
  overlayClassName?: string;
  className?: string;
}

export const Modal = ({
  variant = 'info',
  title,
  description,
  confirmLabel = "Confirmar",
  cancelLabel = "Cancelar",
  onConfirm,
  trigger,
  open,
  onOpenChange,
  children,
  maxWidth = "max-w-md",
  showCloseButton = false,
  overlayClassName = "",
  className = ""
}: ModalProps) => (
  <Dialog.Root open={open} onOpenChange={onOpenChange}>
    {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}
    <Dialog.Portal>
      <Dialog.Overlay className={`fixed inset-0 animate-in fade-in duration-200 ${overlayClassName || "bg-black/60 backdrop-blur-sm z-40"}`} />
      <Dialog.Content 
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-strong z-50 w-[90vw] animate-in zoom-in-95 duration-200 ${maxWidth} ${className}`}
      >
        <div className="sr-only">
          <Dialog.Title>{title || "Modal"}</Dialog.Title>
          <Dialog.Description>{description || "Conteúdo do modal"}</Dialog.Description>
        </div>

        {showCloseButton && (
          <Dialog.Close asChild className="absolute right-6 top-6 z-50">
            <Button 
              variant="ghost" 
              rounded 
              iconLeft={X} 
              className="hover:bg-red-100 transition-colors"
              style={{ color: "#ef4444" }}
              classNameIcon="h-8 w-8"
            />
          </Dialog.Close>
        )}

        <div className={children ? "" : "p-8"}>
          {children ? (
            children
          ) : (
            <>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {title}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {description}
              </p>
              <div className="flex justify-end gap-8">
                <Dialog.Close asChild>
                  <Button variant="default" outline label={cancelLabel} className="py-2" />
                </Dialog.Close>
                <Button 
                  variant={variant === 'danger' ? 'danger' : variant === 'warning' ? 'secondary' : 'primary'} 
                  label={confirmLabel} 
                  onClick={() => {
                    if (onConfirm) onConfirm();
                  }} 
                  className="py-2" 
                />
              </div>
            </>
          )}
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
