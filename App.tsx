import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {QueryClientProvider, QueryClient} from 'react-query';
import {MainLayout} from './screens';
import {Provider} from 'react-redux';
import store, {persistor} from './app/store';
import {PersistGate} from 'redux-persist/integration/react';
import {MainContextProvider} from './context/MainContextProvider';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainContextProvider>
          <QueryClientProvider client={queryClient}>
            <NavigationContainer>
              <Stack.Navigator
                screenOptions={{
                  headerShown: false,
                }}
                initialRouteName={'Dashboard'}>
                <Stack.Screen name="Dashboard" component={MainLayout} />
              </Stack.Navigator>
            </NavigationContainer>
          </QueryClientProvider>
        </MainContextProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
