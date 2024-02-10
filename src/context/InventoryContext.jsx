"use client";
import { createContext, useState, useEffect } from "react";

export const InventoryContext = createContext();
 
export const InventoryProvider = ({ children }) => {

  const [showCheckIn, setShowCheckIn] = useState(false); 
  const [serialData, setSerialData] = useState({}); // State for holding serial data
  const [numberOfInputs, setNumberOfInputs] = useState(0);

  const [checkInData, setCheckInData] = useState({adminID: "", products:[], usage:{}})
  console.log(checkInData)
  // Update numberOfInputs when serialData.quantity changes
  useEffect(() => {
    setNumberOfInputs(serialData.quantity || 0); // If quantity exists in serialData, set numberOfInputs to its value, otherwise set to 0
  }, [serialData.quantity]);

  // Function to generate an array of specified quantity
  function generateArray(length) {
    var array = [];
    for (var i = 0; i < length; i++) {
      array.push({ id: i + 1, serialNumber: ""}); 
    }
    return array;
  }

  const resultArray = generateArray(numberOfInputs);
//   function removeElementAtIndex(array, index) {
//     // Check if the index is valid
//     if (index >= 0 && index < array.length) {
//         // Remove the element at the specified index
//         array.splice(index, 1);
//     }
//     return array;
// }

// Function to update quantity 
const incrementQuantity = () => {
  setSerialData(prevSerialData => ({
    ...prevSerialData,
    quantity: prevSerialData.quantity + 1
  }));
};
 
  return (
    <InventoryContext.Provider
      value={{ showCheckIn, setShowCheckIn, serialData, setSerialData, resultArray, incrementQuantity, setCheckInData, checkInData}}
    >
      {children} 
    </InventoryContext.Provider>
  );
};
