import { Card } from '@/components/ui/card';

// Mock Data
const ALBUMS_MOCK: VinylAlbum[] = [
  {
    id: '1',
    title: 'Random Access Memories',
    artist: 'Daft Punk (2013)',
  },
  {
    id: '2',
    title: 'Celeste Farewell',
    artist: 'Lena Raine (2019)',
  },
  {
    id: '3',
    title: 'Discovery',
    artist: 'Daft Punk (2001)',
  },
];

interface VinylAlbum {
  id: string;
  title: string;
  artist: string;
  coverUrl?: string;
  vinylUrl?: string;
}

interface VinylCardProps {
  album: VinylAlbum;
}

function VinylCard({ album }: VinylCardProps) {
  const { title, artist, coverUrl, vinylUrl } = album;

  return (
    <div className="group relative w-52 h-52 cursor-pointer select-none">
      {/* VINILO: Con textura de surcos de acetato + Rotación al Hover */}
      <div
        className="absolute inset-0 z-0 rounded-full bg-slate-950 border-[3px] border-slate-800 shadow-2xl flex items-center justify-center
                   transition-all duration-[1200ms] cubic-bezier(0.34, 1.56, 0.64, 1)
                   group-hover:translate-x-1/2 group-hover:rotate-180 group-hover:shadow-teal-500/10"
        style={{
          // Simula los surcos circulares del disco de vinilo
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
          /* Galleta interior del vinilo */
          <div className="w-20 h-20 rounded-full border-[5px] border-slate-950 bg-gradient-to-tr from-teal-500 to-emerald-400 flex items-center justify-center shadow-lg relative">
            <div className="w-4 h-4 rounded-full bg-slate-950 border border-slate-800" />
            {/* Brillo de la galleta */}
            <div className="absolute inset-0 rounded-full bg-white/10" />
          </div>
        )}
      </div>

      {/* FUNDA / PORTADA */}
      <Card className="relative z-10 w-full h-full bg-slate-900/90 border-slate-800/80 text-slate-100 shadow-xl overflow-hidden flex flex-col justify-end p-3.5 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-slate-700">
        {/* Imagen de Portada (si existe) */}
        {coverUrl && (
          <img
            src={coverUrl}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-85 group-hover:opacity-100 transition-opacity duration-300"
          />
        )}

        {/* Reflejo Plastificado (Efecto Glossy) */}
        <div className="absolute inset-0 z-10 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />

        {/* Info del Álbum con Glassmorphism */}
        <div className="relative z-20 bg-slate-950/75 p-2.5 rounded-lg backdrop-blur-md border border-white/10 shadow-lg">
          <h3 className="font-bold text-sm text-teal-400 truncate leading-snug">{title}</h3>
          <p className="text-xs text-slate-300/80 truncate mt-0.5">{artist}</p>
        </div>
      </Card>
    </div>
  );
}

// Vista Principal
export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 sm:p-12 gap-10">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
          VinylPedia UI Test
        </h1>
        <p className="text-slate-400 text-sm max-w-sm mx-auto">
          Pasa el cursor sobre cualquiera de las portadas para desplegar el vinilo.
        </p>
      </header>

      {/* Grid / Layout con espaciado seguro en desktop y mobile */}
      <section className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-16 md:gap-28 py-4">
        {ALBUMS_MOCK.map((album) => (
          <VinylCard key={album.id} album={album} />
        ))}
      </section>
    </main>
  );
}
