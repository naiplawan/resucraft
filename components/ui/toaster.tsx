'use client';

import { Toaster as SonnerToaster } from 'sonner';

export function Toaster() {
  return (
    <SonnerToaster
      position="top-right"
      expand={false}
      richColors
      closeButton
      toastOptions={{
        classNames: {
          toast: 'rounded-xl border-2 border-border/50 shadow-canva-md',
          title: 'font-semibold',
          description: 'text-sm text-muted-foreground',
          actionButton: 'bg-primary text-primary-foreground rounded-lg',
          cancelButton: 'bg-muted text-muted-foreground rounded-lg',
          closeButton: 'border-border hover:bg-muted',
        },
      }}
    />
  );
}
