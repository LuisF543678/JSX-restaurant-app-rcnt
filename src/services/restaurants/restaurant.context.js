import React, { useState, createContext, useEffect, useMeno } from "react";

export const RestauranContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
    return(
    <RestauranContext.Provider>
        {children}
    </RestauranContext.Provider>);
};