import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profil from "./pages/profil";
import FormCuti from "./pages/formCuti";
import { GuestRoute } from "./route/GuestRoute";
import { AuthRoute } from "./route/AuthRoute";
import { PesertaRoute } from "./route/PesertaRoute";
import { AdminRoute } from "./route/AdminRoute";
import { BendaharaRoute } from "./route/BendaharaRoute";
import { GuruRoute } from "./route/GuruRoute";

const router = createBrowserRouter([
  ...AuthRoute.map((item) => ({
    path: item.path,
    element: item.element,
  })),
  ...GuestRoute.map((item) => ({
    path: item.path,
    element: item.element,
  })),
  ...PesertaRoute.map((item) => ({
    path: item.path,
    element: item.element,
  })),
  ...GuruRoute.map((item) => ({
    path: item.path,
    element: item.element,
  })),
  ...AdminRoute.map((item) => ({
    path: item.path,
    element: item.element,
  })),
  ...BendaharaRoute.map((item) => ({
    path: item.path,
    element: item.element,
  })),
  {
    path: "/profil",
    element: <Profil />,
  },
  {
    path: "/formcuti",
    element: <FormCuti />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
