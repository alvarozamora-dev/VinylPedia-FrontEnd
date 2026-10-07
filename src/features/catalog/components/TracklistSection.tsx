import type { Track } from '../types/catalog.types';

interface TracklistSectionProps {
  tracks?: Track[];
}

export function TracklistSection({ tracks }: TracklistSectionProps) {
  if (!tracks || tracks.length === 0) {
    return (
      <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800 text-center text-slate-500 text-sm">
        No hay lista de canciones disponible para este álbum.
      </div>
    );
  }

  const sideA = tracks.filter((t) => t.side === 'A');
  const sideB = tracks.filter((t) => t.side === 'B');

  const renderTrackGroup = (title: string, trackGroup: Track[]) => (
    <div className="space-y-3">
      <h3 className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-950/40 border border-teal-800/40 px-3 py-1.5 rounded-lg inline-block">
        {title}
      </h3>
      <ul className="divide-y divide-slate-800/60">
        {trackGroup.map((track) => (
          <li
            key={track.id}
            className="py-2.5 px-3 flex items-center justify-between text-sm hover:bg-slate-800/30 rounded-lg transition-colors group"
          >
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-500 font-mono w-4">{track.number}.</span>
              <span className="text-slate-300 group-hover:text-slate-100 font-medium">
                {track.title}
              </span>
            </div>
            <span className="text-xs font-mono text-slate-500">{track.duration}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="space-y-6 bg-slate-900/70 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm">
      <h2 className="text-lg font-bold text-slate-200 border-b border-slate-800 pb-3">
        Lista de Canciones (Tracklist)
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sideA.length > 0 && renderTrackGroup('Lado A', sideA)}
        {sideB.length > 0 && renderTrackGroup('Lado B', sideB)}
      </div>
    </div>
  );
}
