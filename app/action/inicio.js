import axios from "axios";

const getSession = (id) => ({
  type: "GET_SESSION",
  list,
});

export const fetchSession = (id) => (dispatch) => {
  return axios
    .get(`https://picking.janisdev.in/api/session/${id}`)
    .then((list) => {
      console.log("SESSION LISTA DEVUELTA DE BACKEND: ", list)
      dispatch(getSession(list))}
      );
};
