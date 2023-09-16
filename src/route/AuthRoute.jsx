import { Login, Register, ChooseRegister } from "../pages/autentication";
export const AuthRoute = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <ChooseRegister />,
  },
  {
    path: "/register/:slug_cabang",
    element: <Register />,
  },
];
