import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="text-center py-20 space-y-6">
      <h1 className="text-6xl font-extrabold text-teal-400">404</h1>
      <p className="text-xl text-slate-300">¡Vaya! La página que buscas no existe.</p>
      <Link
        to="/"
        className="inline-block bg-teal-500 hover:bg-teal-600 text-slate-950 font-semibold px-4 py-2 rounded-lg transition-colors"
      >
        Volver al Catálogo
      </Link>
    </div>
  );
}
