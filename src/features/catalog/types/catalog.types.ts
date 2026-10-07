export interface Track {
  id: string;
  side: 'A' | 'B';
  number: number;
  title: string;
  duration: string;
}

export interface VinylAlbum {
  id: string;
  title: string;
  artist: string;
  genre: string;
  year: number;
  coverUrl: string;
  vinylUrl?: string;
  label?: string;
  speed?: '33 RPM' | '45 RPM';
  tracklist?: Track[];
}

export interface VinylCardProps {
  album: VinylAlbum;
}
