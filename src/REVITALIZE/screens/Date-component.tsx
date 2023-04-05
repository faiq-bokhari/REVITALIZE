import React, { useState } from 'react';

interface DateContextProps {
  date: Date;
  addOneDay: () => void;
  subtractOneDay: () => void;
  setDate: (newDate: Date) => void;
}

export const DateContext = React.createContext<DateContextProps>({
  date: new Date(),
  addOneDay: () => {},
  subtractOneDay: () => {},
  setDate: (newDate: Date) => {}
});

const GlobalDateProvider = ({ children }) => {
  // Initialize state using the useState hook to set the current date to the date variable
  const [date, setDateState] = useState(new Date());

  // Function to add one day to the date variable
  const addOneDay = () => {
    setDateState(prevDate => {
      // Create a new date object based on the previous date
      const newDate = new Date(prevDate);
      // Increase the day of the new date object by 1
      newDate.setDate(newDate.getDate() + 1);
      // Return the updated new date object
      return newDate;
    });
  };

  // Function to subtract one day from the date variable
  const subtractOneDay = () => {
    setDateState(prevDate => {
      // Create a new date object based on the previous date
      const newDate = new Date(prevDate);
      // Decrease the day of the new date object by 1
      newDate.setDate(newDate.getDate() - 1);
      // Return the updated new date object
      return newDate;
    });
  };

  // Function to set a new date for the date variable
  const setDate = (newDate: Date) => {
    // Set the date variable to the new date object
    setDateState(newDate);
  };

  return (
    <DateContext.Provider value={{ date, addOneDay, subtractOneDay, setDate }}>
      {children}
    </DateContext.Provider>
  );
};

export default GlobalDateProvider;