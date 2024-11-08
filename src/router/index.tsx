import { BrowserRouter, Routes, Route } from "react-router-dom";

import { List, Jokes, Landing, RickAndMorty } from "src/pages";
import { ROUTES } from "src/constants";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.landing} element={<Landing />} />
        <Route path={ROUTES.list} element={<List />} />
        <Route path={ROUTES.jokes} element={<Jokes />} />
        <Route path={ROUTES.rickAndMorty} element={<RickAndMorty />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
