import { ADD_PRODUCT, DELETE_REVIEW, IS_VUE } from "./Actions-Types";

export const AddProduct = (payload) => {
  return {
    type: ADD_PRODUCT,
    payload,
  };
};
export const DeleteReview = (payload) => {
  return {
    type: DELETE_REVIEW,
    payload,
  };
};
export const IsVue = (payload) => {
  return {
    type: IS_VUE,
    payload,
  };
};
