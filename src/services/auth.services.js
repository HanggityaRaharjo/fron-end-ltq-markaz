import axios from "axios";

export const login = () => {
  axios
    .post("https://ltqmarkaz.000webhostapp.com/api/login", data)
    .then((res) => {
      console.log(res);
    })
    .catch((Error) => {
      console.log(Error);
    });
};
