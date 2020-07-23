import axios from 'axios';
import { headers } from '../headers'

const Picked = (items) => {
  return {
    type: 'ITEM_PICKED',
    items,
  };
};

export const itemPicked = (sessionId, obj) => {
  return (dispatch) => {
    return axios
      .post(`https://picking.janis.in/api/session/${sessionId}/pick`, obj , headers())
      .then((res) => dispatch(Picked(res.data)) )
      .catch(err =>{
        return err.response.data
      });
  };
};
