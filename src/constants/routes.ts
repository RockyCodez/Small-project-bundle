export const ROUTES = {
  landing: "/",
  list: "/list",
  jokes: "/jokes",
  rickAndMorty: "/rick-and-morty",
  characterInner: (id: number | string) => `/rick-and-morty/${id}`,
};
