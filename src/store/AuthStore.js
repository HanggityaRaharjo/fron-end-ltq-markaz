import axios from "axios";
import { create } from "zustand";
import Cookies from "js-cookie";

const useAuth = create((set) => ({
  isAuth: false,
  isLoading: false,
  isError: false,
  user_cabang_id: "",
  uuid: "",
  email: "",
  name: "",
  cabang: {},
  role: [],
  checkCookieAvailable: () => {
    let token = Cookies.get("access_token");
    if (token) {
      return true;
    }
    return false;
  },
  setToken: (token) => {
    set({ authToken: token });
  },
  setCabang: (data) => {
    set({ cabang: data });
  },
  HandleMe: (token) => {
    set({ isError: false });
    set({ isLoading: true });
    axios
      .post(`${import.meta.env.VITE_BACK_END_END_POINT_URL}/me`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        set({
          name: data.name,
          email: data.email,
          uuid: data.uuid,
          isAuth: true,
          role: data.role,
        });
        set({ isLoading: false });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        set({ isError: true, isLoading: false });
      });
  },
  logout: (token) => {
    axios
      .post(`${import.meta.env.VITE_BACK_END_END_POINT_URL}/logout`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        Cookies.remove("access_token");
        set({
          name: "",
          email: "",
          uuid: "",
          isAuth: false,
          role: {},
        });
        set({ isAuth: false });
      })
      .catch((error) => {
        Cookies.remove("access_token");
        set({ isAuth: false });
      });
  },
  changeUserCabangId: (id) => {
    set({ user_cabang_id: id });
  },
}));

export default useAuth;
