import { BrowserRouter, Routes, Route } from "react-router-dom";

import { List, Jokes, Landing } from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/list" element={<List />} />
        <Route path="/jokes" element={<Jokes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
