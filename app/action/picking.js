import axios from 'axios';
import { headers } from '../headers'

const Picked = (items) => {
  return {
    type: 'ITEM_PICKED',
    items,
  };
};

const listProduct = (items) => {
  return {
    type: 'LIST_ITEMS_SEARCHED',
    items,
  };
};

export const itemFinalPick = () => {
  return {
    type: 'FINAL',
  };
};


export const itemParaSustituir = (items) => {
  return {
    type: 'SUSTITUIR',
    items,
  };
};

export const itemPicked = (sessionId, obj) => {
  return (dispatch) => {
    return axios
      .post(`https://picking.janis.in/api/session/${sessionId}/pick`, obj, headers())
      .then(() => {
        dispatch(Picked(obj.items))
      })
      .catch(err => {
        return err.response.data
      });
  };
};

export const itemSearch = (sku) => {
  return (dispatch) => {
    return axios
      .post(`https://catalog.janis.in/api/${sku}`, headers())
      .then((list) => dispatch(listProduct(list)))
  }
};



