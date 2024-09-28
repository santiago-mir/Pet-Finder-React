import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { SignUpPage } from "../pages/signup/signup";
import { Search } from "../pages/search";

import { Layout } from "../components/layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
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
