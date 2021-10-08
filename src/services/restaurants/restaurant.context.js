import React, { useState, createContext, useEffect, useMeno } from "react;";

import { restaurantsRequest, restaurantsTransform } from "./restaurant.services";

export const RestauranContext = createContext();

export const RestauranContextProvider = ({children}) =>{
    return
        <RestauranContext.Provider>
            {children}
        </RestauranContext.Provider>;
};