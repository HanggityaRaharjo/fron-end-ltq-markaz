import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Kontak } from "./pages/index";
import { FormBiodataSiswa } from "./pages/peserta";
import LandingPageMaster from "./pages/LandingPageMaster";
import TentangKami from "./pages/TentangKami";

import Faq from "./pages/Faq";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPageMaster />,
  },
  {
    path: "/tentang",
    element: <TentangKami />,
  },
  {
    path: "/kontak",
    element: <Kontak />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/peserta-baru/biodata-siswa",
    element: <FormBiodataSiswa />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
