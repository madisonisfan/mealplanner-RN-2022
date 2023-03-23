import { baseUrl } from "../shared/baseUrl";

export const mapImageURL = (arr) => {
  return arr.map((item) => {
    return {
      ...item,
      image: require("../assets/images/food/" + item.image),
    };
  });
};
