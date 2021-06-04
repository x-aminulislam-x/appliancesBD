import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './navigation/tabs'
import {Home,Shop, OrderDelivery } from './screens'
 
 
 


const Stack = createStackNavigator();
const App = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator
              screenOptions={{
                  headerShown: false
              }}
              initialRouteName={'Home'}
          >
              <Stack.Screen name="Home" component={Tabs} />
              <Stack.Screen name="Shop" component={Shop} />
              <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
          </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App;


