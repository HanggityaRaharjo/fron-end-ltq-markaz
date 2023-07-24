import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/index";
import { FormBiodataSiswa } from "./pages/peserta";

const router = createBrowserRouter([
  {
    path: "/",
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
