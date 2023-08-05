import axios from "axios";
import { create } from "zustand";
import Cookies from "js-cookie";

const useAuth = create((set) => ({
  authToken: "",
  uuid: "",
  email: "",
  name: "",
  password: "",
  isAuth: false,
  setToken: (token) => {
    set({ authToken: token });
    // Cookies.set("jwt_token", token, { experies: 1 });
    console.log("sampai sini, ini di store", token);
  },
  HandleMe: (token) => {
    axios
      .post("http://192.168.43.81:8000/api/me", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        console.log("sampai axios di store");
        set({ uuid: data.uuid, email: data.email, name: data.name });
      })
      .catch((error) => console.log(error.message));
  },
  logout: () => set({ uudi: "", email: "", username: "", password: "" }),
}));

export default useAuth;
