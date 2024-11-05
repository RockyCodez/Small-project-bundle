export interface InfoInterface {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface DataInterface {
  name: string;
  url: string;
}

export interface CharacterInterface {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: DataInterface;
  location: DataInterface;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface AllCharactersInterface {
  info: InfoInterface;
  results: CharacterInterface[];
}
