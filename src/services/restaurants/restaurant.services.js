import { mocks } from "../mock";
import { camelize } from "camelize";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  //console.log(mocks);
  return new Promise((resolve, reject) => {
    const mock = mocks(location);
    if (!mock) {
      reject("not founds");
    }
    resolve(mock);
  });
};

const restaurantsTransform = ({ results = [] }) => {
  //const newResult = camelize(result);
  //return newResult;
  const mappedResults = results.map((restaurant) => {
    //console.log(1)
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporaly: restaurant.bussiness_status === "Closed temporaly",
    };
  });
  console.log(mappedResults);
  return camelize(mappedResults);
};

/* 
restaurantsRequest().then(restaurantsTransform).then((transformedResponse) => {
    console.log(camelize(transformedResponse.results));
}).catch((err) => {
    console.log(err);
}) 
*/
