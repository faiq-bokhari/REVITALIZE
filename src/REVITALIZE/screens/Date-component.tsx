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
  const [date, setDateState] = useState(new Date());

  const addOneDay = () => {
    setDateState(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() + 1);
      return newDate;
    });
  };

  const subtractOneDay = () => {
    setDateState(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() - 1);
      return newDate;
    });
  };

  const setDate = (newDate: Date) => {
    setDateState(newDate);
  };

  return (
    <DateContext.Provider value={{ date, addOneDay, subtractOneDay, setDate }}>
      {children}
    </DateContext.Provider>
  );
};

export default GlobalDateProvider;