import { Info } from 'lucide-react';

/** Emplacement clairement marqué pour une information réelle à fournir par l'agence. */
export function TbcNote({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-4 flex gap-3 rounded-xl border border-dashed border-gold-600 bg-gold-50 p-4 text-sm text-gold-800">
      <Info className="h-5 w-5 shrink-0 mt-0.5" aria-hidden="true" />
      <p>
        <strong className="font-semibold">{label}: </strong>
        {children}
      </p>
    </div>
  );
}
