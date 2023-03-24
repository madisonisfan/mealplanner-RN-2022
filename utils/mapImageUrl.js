// Note: React Native does not allow dynamic values for require, hence the static mapping here

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
      /*
            case 'chrome-river.jpg':
                img = require('../assets/images/chrome-river.jpg');
                break;
            case 'breadcrumb-trail.jpg':
                img = require('../assets/images/breadcrumb-trail.jpg');
                break;
            case 'redux-woods.jpg':
                img = require('../assets/images/redux-woods.jpg');
                break;
            case 'bootstrap-logo.png':
                img = require('../assets/images/bootstrap-logo.png');
                break;
            case 'node-logo.png':
                img = require('../assets/images/node-logo.png');
                break;
            case 'git-logo.png':
                img = require('../assets/images/git-logo.png');
                break;
            case 'mongo-logo.png':
                img = require('../assets/images/mongo-logo.png');
                break;*/
      default:
        img = require("../assets/images/food1.jpg");
    }
    return {
      ...item,
      image: img,
    };
  });
};

/*
import { baseUrl } from "../shared/baseUrl";

export const mapImageURL = (arr) => {
  return arr.map((item) => {
    return {
      ...item,
      image: require("../assets/images/food/" + item.image),
    };
  });
};*/
