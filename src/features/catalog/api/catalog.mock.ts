import type { VinylAlbum } from '../types/catalog.types';

export const ALBUMS_MOCK: VinylAlbum[] = [
  {
    id: 'v1',
    title: 'The Dark Side of the Moon',
    artist: 'Pink Floyd',
    genre: 'Rock Progresivo',
    year: 1973,
    label: 'Harvest / EMI',
    speed: '33 RPM',
    coverUrl:
      'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=800',
    tracklist: [
      { id: 't1', side: 'A', number: 1, title: 'Speak to Me / Breathe', duration: '3:57' },
      { id: 't2', side: 'A', number: 2, title: 'On the Run', duration: '3:35' },
      { id: 't3', side: 'A', number: 3, title: 'Time', duration: '6:53' },
      { id: 't4', side: 'A', number: 4, title: 'The Great Gig in the Sky', duration: '4:44' },
      { id: 't5', side: 'B', number: 1, title: 'Money', duration: '6:22' },
      { id: 't6', side: 'B', number: 2, title: 'Us and Them', duration: '7:49' },
      { id: 't7', side: 'B', number: 3, title: 'Any Colour You Like', duration: '3:26' },
      { id: 't8', side: 'B', number: 4, title: 'Brain Damage', duration: '3:46' },
      { id: 't9', side: 'B', number: 5, title: 'Eclipse', duration: '2:10' },
    ],
  },
];

// Búsqueda de álbum por ID para la página de detalle
export const getAlbumById = (id: string): VinylAlbum | undefined => {
  return ALBUMS_MOCK.find((album) => album.id === id);
};
