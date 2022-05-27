import React, {createContext, useEffect} from 'react';
import {useMMKVObject, useMMKVString, MMKV} from 'react-native-mmkv';
const storage = new MMKV();
export const MainContext = createContext({});

//custom hook to use the context
export const useMainContext = () => {
  const context = React.useContext(MainContext);
  if (context === undefined) {
    throw new Error('useMainContext must be used within a MainContextProvider');
  }
  return context;
};

export const MainContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [events, setEvents] = useMMKVObject('wowevents');
  return (
    <MainContext.Provider
      value={{
        events,
        setEvents,
      }}>
      {children}
    </MainContext.Provider>
  );
};
