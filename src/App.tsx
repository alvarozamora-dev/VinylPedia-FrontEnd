import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from './routes/app.routes';
import { CollectionProvider } from '@/features/collection/context/CollectionContext';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <CollectionProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
        {/* Navbar Global */}
        <header className="border-b border-slate-800 p-4 flex justify-between items-center max-w-5xl w-full mx-auto">
          <nav className="flex gap-6 font-medium text-sm">
            <Link to="/" className="text-teal-400 hover:text-teal-300 transition-colors">
              Catálogo
            </Link>
            <Link to="/collection" className="text-teal-400 hover:text-teal-300 transition-colors">
              Mi Colección
            </Link>
          </nav>
          <button
            onClick={() => setIsAuthenticated(!isAuthenticated)}
            className="text-xs bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded text-slate-300 transition-colors border border-slate-700"
          >
            {isAuthenticated
              ? 'Estado: Autenticado (Cerrar Sesión)'
              : 'Estado: Visitante (Simular Login)'}
          </button>
        </header>

        {/* Vistas según URL */}
        <main className="flex-1 max-w-5xl w-full mx-auto p-6">
          <AppRoutes isAuthenticated={isAuthenticated} />
        </main>
      </div>
    </CollectionProvider>
  );
}
