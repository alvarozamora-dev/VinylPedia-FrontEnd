import { Card } from '@/components/ui/card';
import type { VinylCardProps } from '../types/catalog.types';

export function VinylCard({ album }: VinylCardProps) {
  const { title, artist, coverUrl, vinylUrl } = album;

  return (
    <div className="group relative w-52 h-52 cursor-pointer select-none">
      {/* VINILO */}
      <div
        className="absolute inset-0 z-0 rounded-full bg-slate-950 border-[3px] border-slate-800 shadow-2xl flex items-center justify-center
                   transition-all duration-[1200ms] cubic-bezier(0.34, 1.56, 0.64, 1)
                   group-hover:translate-x-1/2 group-hover:rotate-180 group-hover:shadow-teal-500/10"
        style={{
          backgroundImage: `repeating-radial-gradient(circle at center, #0f172a 0, #020617 2px, #0f172a 4px)`,
        }}
      >
        {vinylUrl ? (
          <img
            src={vinylUrl}
            alt={`Vinilo de ${title}`}
            className="w-full h-full object-cover rounded-full opacity-90"
          />
        ) : (
          <div className="w-20 h-20 rounded-full border-[5px] border-slate-950 bg-gradient-to-tr from-teal-500 to-emerald-400 flex items-center justify-center shadow-lg relative">
            <div className="w-4 h-4 rounded-full bg-slate-950 border border-slate-800" />
            <div className="absolute inset-0 rounded-full bg-white/10" />
          </div>
        )}
      </div>

      {/* FUNDA / PORTADA */}
      <Card className="relative z-10 w-full h-full bg-slate-900/90 border-slate-800/80 text-slate-100 shadow-xl overflow-hidden flex flex-col justify-end p-3.5 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-slate-700">
        {coverUrl && (
          <img
            src={coverUrl}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-85 group-hover:opacity-100 transition-opacity duration-300"
          />
        )}

        <div className="absolute inset-0 z-10 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />

        <div className="relative z-20 bg-slate-950/75 p-2.5 rounded-lg backdrop-blur-md border border-white/10 shadow-lg">
          <h3 className="font-bold text-sm text-teal-400 truncate leading-snug">{title}</h3>
          <p className="text-xs text-slate-300/80 truncate mt-0.5">{artist}</p>
        </div>
      </Card>
    </div>
  );
}
