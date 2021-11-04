import { mockImages, mocks } from "../mock";
//import { mockImages } from "../mockImages";
import { camelize } from "camelize";

export const restaurantsRequest = (location = "41.878113,-87.629799") => {
  //console.log(mocks);
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not founds");
    }
    resolve(mock);
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  //const newResult = camelize(result);
  //return newResult;
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * mockImages.length - 1)];  
    });

    return {
      ...restaurant,
      
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporaly: 
      restaurant.business_status === 'CLOSED_TEMPORARILY',
    };
  });
  console.log(mappedResults); // yes
  return camelize(mappedResults);
};

/* 
restaurantsRequest().then(restaurantsTransform).then((transformedResponse) => {
    console.log(camelize(transformedResponse.results));
}).catch((err) => {
    console.log(err);
}) 
*/
