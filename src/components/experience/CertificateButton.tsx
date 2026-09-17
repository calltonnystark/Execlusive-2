'use client';

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useState } from 'react';

interface Certificate {
  file: string;
  title: string;
}

function normalizeCertificates(
  certificate: Certificate | Certificate[],
): Certificate[] {
  return Array.isArray(certificate) ? certificate : [certificate];
}

interface CertificateButtonProps {
  certificate: Certificate | Certificate[];
}

export function CertificateButton({
  certificate,
}: CertificateButtonProps) {
  const certificates = normalizeCertificates(certificate);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button type="button" variant="outline" onClick={() => setOpen(true)}>
        View Certificate
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] w-full max-w-4xl overflow-auto">
          <DialogTitle>Completion Certificates</DialogTitle>
          <div className="grid gap-6">
            {certificates.map((item) => (
              <div key={item.file} className="space-y-2">
                <h3 className="font-semibold">{item.title}</h3>
                <div className="flex max-h-[75vh] min-h-[240px] w-full items-center justify-center sm:min-h-[500px]">
                  <Image
                    src={item.file}
                    alt={item.title}
                    width={1600}
                    height={1100}
                    sizes="(max-width: 640px) 100vw, 896px"
                    className="max-h-[75vh] w-auto max-w-full rounded-md object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
