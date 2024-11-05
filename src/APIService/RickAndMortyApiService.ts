const BASE_URL = "https://rickandmortyapi.com/api";

const RickAndMortyApiService = {
  getAllCharacters: async (page = 1) => {
    try {
      const response = await fetch(`${BASE_URL}/character/?page=${page}`);
      if (!response.ok) throw new Error("Failed to fetch character list");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  getSingleCharacter: async (id: number) => {
    try {
      const response = await fetch(`${BASE_URL}/character/${id}`);
      if (!response.ok) throw new Error("Failed to fetch character");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};

export default RickAndMortyApiService;
