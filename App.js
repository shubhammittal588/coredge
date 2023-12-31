import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './components/Login';
import Home from './components/Home';
import Cart from './components/Cart';
import Buy from './components/Buy';
import { ProductProvider } from './components/productContext'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ProductProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Login"
            component={Main}
            options={{title: "Login"}}
          />
          <Stack.Screen 
            name="Home"
            component={Home}
            options={{title: "Home"}}
          />
          <Stack.Screen 
            name="Cart"
            component={Cart}
            options={{title: "Cart"}}
          />
          <Stack.Screen 
            name="Buy"
            component={Buy}
            options={{headerShown: "Buy"}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ProductProvider>
  );
}

