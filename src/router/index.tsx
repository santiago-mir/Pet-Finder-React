import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { App } from "../pages/app";
import { Search } from "../pages/search";

import { Layout } from "../components/layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<App />} />
      <Route path="/search/:query" element={<Search />} />
    </Route>
  )
);

// function AppRoutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<App />} />
//         <Route path="page2" element={<Page2 />} />
//         <Route path="/search/:busqueda" element={<Search />} />
//       </Route>
//     </Routes>
//   );
// }

export { router };
