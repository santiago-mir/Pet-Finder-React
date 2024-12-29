import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { SignUpPage } from "../pages/signup/signup";
import { InstructionsPage } from "../pages/instructions/ins";
import { UserProfile } from "../pages/userProfile";
import { UserPassword } from "../pages/userProfile";
import { ReportPage } from "../pages/reportPet";
import { UserReports } from "../pages/userReports";
import { LostPets } from "../pages/lostPets";

import { Layout } from "../components/layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/instructions" element={<InstructionsPage />} />
      <Route path="/my-profile" element={<UserProfile />} />
      <Route path="/edit-password" element={<UserPassword />} />
      <Route path="/report-pet" element={<ReportPage />} />
      <Route path="/user-reports" element={<UserReports />} />
      <Route path="/lost-pets" element={<LostPets />} />
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
