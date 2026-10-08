import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { VinylAlbum } from '@/features/catalog/types/catalog.types';

const STORAGE_KEY = 'vinylpedia_collection';

interface CollectionContextType {
  collection: VinylAlbum[];
  addToCollection: (album: VinylAlbum) => void;
  removeFromCollection: (albumId: string) => void;
  isInCollection: (albumId: string) => boolean;
}

const CollectionContext = createContext<CollectionContextType | undefined>(undefined);

export function CollectionProvider({ children }: { children: ReactNode }) {
  const [collection, setCollection] = useState<VinylAlbum[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error('Error al cargar la colección:', error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(collection));
    } catch (error) {
      console.error('Error al guardar la colección:', error);
    }
  }, [collection]);

  const addToCollection = (album: VinylAlbum) => {
    setCollection((prev) => {
      if (prev.some((item) => item.id === album.id)) return prev;
      return [...prev, album];
    });
  };

  const removeFromCollection = (albumId: string) => {
    setCollection((prev) => prev.filter((item) => item.id !== albumId));
  };

  const isInCollection = (albumId: string) => {
    return collection.some((item) => item.id === albumId);
  };

  return (
    <CollectionContext.Provider
      value={{ collection, addToCollection, removeFromCollection, isInCollection }}
    >
      {children}
    </CollectionContext.Provider>
  );
}

export function useCollection() {
  const context = useContext(CollectionContext);
  if (!context) {
    throw new Error('useCollection debe usarse dentro de un CollectionProvider');
  }
  return context;
}
