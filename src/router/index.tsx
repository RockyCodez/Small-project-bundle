import { BrowserRouter, Routes, Route } from "react-router-dom";

import { List, Jokes, Landing } from "src/pages";
import { ROUTES } from "src/constants";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.landing} element={<Landing />} />
        <Route path={ROUTES.list} element={<List />} />
        <Route path={ROUTES.jokes} element={<Jokes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
