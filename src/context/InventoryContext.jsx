"use client";

import { createContext, useState } from "react";

export const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [showCheckIn, setShowCheckIn] = useState(false);

  return(
    <InventoryContext.Provider value={{showCheckIn, setShowCheckIn}}>{children}</InventoryContext.Provider>
  )
}
