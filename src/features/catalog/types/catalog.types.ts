export interface VinylAlbum {
  id: string;
  title: string;
  artist: string;
  coverUrl?: string;
  vinylUrl?: string;
}

export interface VinylCardProps {
  album: VinylAlbum;
}
