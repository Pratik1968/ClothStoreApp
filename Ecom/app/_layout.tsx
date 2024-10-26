import { View, Text, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { Slot, SplashScreen, Stack } from 'expo-router'
import { Lato_400Regular, Lato_700Bold,Lato_900Black, useFonts } from '@expo-google-fonts/lato';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { persistor, store } from '../store/store';
import { PersistGate } from 'redux-persist/integration/react';

const Layout = () => {
  const queryClient = new QueryClient();
   
  const [loaded, error] = useFonts({
        Lato_900Black,
        Lato_700Bold,
        Lato_400Regular
      });
    
    
      useEffect(() => {
        if (loaded || error) {
          SplashScreen.hideAsync();
        }
      }, [loaded, error]);
    
      if (!loaded && !error) {
        return null;
      }

    return (
      <Provider store={store}>
      <PersistGate persistor={persistor}>
        <QueryClientProvider client={queryClient}>
           <Stack />
           </QueryClientProvider>
      </PersistGate>
   </Provider>
  )
}

export default Layout