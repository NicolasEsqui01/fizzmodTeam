import axios from 'axios';

// const Picked = (obj) => {
//   return {
//     type: 'ITEM_PICKED',
//     obj,
//   };
// };

export const itemPicked = (sessionId, obj) => {
  return (dispatch) => {
    return axios
      .post(`https://picking.janis.in/api/session/${sessionId}/pick`, obj)
      .then((res) => {
         return res.sendSatus(200);
        //dispatch(Picked(res.data));
      })
      .catch(err =>{
        return err.response.data
      });
  };
};
