import { Routes, Route } from 'react-router-dom';
import { CatalogPage } from '@/features/catalog/pages/CatalogPage';
import { NotFoundPage } from '@/components/feedback/NotFoundPage';
import { ProtectedRoute } from './ProtectedRoute';
import { CollectionPage } from '@/features/catalog/pages/CollectionPage';

interface AppRoutesProps {
  isAuthenticated: boolean;
}

export function AppRoutes({ isAuthenticated }: AppRoutesProps) {
  return (
    <Routes>
      {/* RUTA PÚBLICA */}
      <Route path="/" element={<CatalogPage />} />

      {/* RUTAS PRIVADAS (Anidadas bajo el guardián ProtectedRoute) */}
      <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
        <Route path="/collection" element={<CollectionPage />} />
      </Route>

      {/* RUTA ERROR 404 (Atrapa cualquier URL invalida) */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
