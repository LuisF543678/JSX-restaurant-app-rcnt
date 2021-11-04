import React, { useState, createContext, useEffect, useMemo } from "react";
import { restaurantsRequest, restaurantsTransform } from "./restaurant.service";

export const RestaurantsContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState(["san fracisco"]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const retrieveRestaurants = () => {
        setIsLoading(true);
        setTimeout(() => {
            restaurantsRequest()
                .then(restaurantsTransform)
                .then((results) => {
                    setIsLoading(false);
                    setRestaurants(results);
                })
                .catch((error) => {
                    setIsLoading(false);
                    setError(error);
                });
        }, 2000);
    };

    useEffect(() => {
        retrieveRestaurants();
    }, []);

    return (
        <RestaurantsContext.Provider
            value={{
                restaurants,
                isLoading,
                error
            }}>
            {children}
        </RestaurantsContext.Provider>
        );
};