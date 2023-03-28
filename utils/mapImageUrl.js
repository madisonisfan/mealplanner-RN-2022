// Note: React Native does not allow dynamic values for require, hence the static mapping here

export const mapImageURL = (imageName) => {
  let img;
  switch (imageName) {
    case "pasta.jpg":
      return require("../assets/images/food/pasta.jpg");
    case "pancakes.jpg":
      return require("../assets/images/food/pancakes.jpg");
    case "salad.jpg":
      return require("../assets/images/food/salad.jpg");
    case "sandwich.jpg":
      return require("../assets/images/food/sandwich.jpg");
    case "smoothie.jpg":
      return require("../assets/images/food/smoothie.jpg");
    default:
      return require("../assets/images/food1.jpg");
  }
};

/*KEEEEP!
export const mapImageURL = (arr) => {
  return arr.map((item) => {
    let img;
    switch (item.image) {
      case "pasta.jpg":
        img = require("../assets/images/food/pasta.jpg");
        break;
      case "pancakes.jpg":
        img = require("../assets/images/food/pancakes.jpg");
        break;
      case "salad.jpg":
        img = require("../assets/images/food/salad.jpg");
        break;
      case "sandwich.jpg":
        img = require("../assets/images/food/sandwich.jpg");
        break;
      case "smoothie.jpg":
        img = require("../assets/images/food/smoothie.jpg");
        break;
      
      default:
        img = require("../assets/images/food1.jpg");
    }
    return {
      ...item,
      image: img,
    };
  });
};
*/
