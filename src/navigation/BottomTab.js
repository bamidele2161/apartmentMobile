import React, { useEffect, useState } from "react";
import {
  HomeIcon,
  ShoppingCartIcon,
  UserIcon,
} from "react-native-heroicons/outline";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import Home from "../screens/Home";
import { color } from "../color";

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  // const [length, setLength] = useState(0)
  // const navigation = useNavigation();

  // useEffect(() => {
  //     const unsubscribe = navigation.addListener('focus', () => {
  //         getLength()
  //     });
  //     return unsubscribe;
  // }, [navigation])

  // const getLength = async () => {
  //     const itemArray = await AsyncStorage.getItem("cartItems")
  //     const items = JSON.parse(itemArray)
  //     if(items) {
  //         setLength(items.length)
  //     } else{
  //         setLength(length)
  //     }
  // }

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveTintColor: color.primaryColor,
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <HomeIcon color={color} size={28} />,
        }}
      />
      {/* <Tab.Screen
        name="Search"
        // component={CartScreen}
        options={{
          headerShown: false,
          //   tabBarBadge: length,
          tabBarIcon: ({ color, size }) => (
            <ShoppingCartIcon color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        // component={CartScreen}
        options={{
          headerShown: false,
          //   tabBarBadge: length,
          tabBarIcon: ({ color, size }) => (
            <ShoppingCartIcon color={color} size={30} />
          ),
        }}
      /> */}

      {/* <Tab.Screen
        name="Settings"
        // component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <UserIcon color={color} size={30} />,
        }}
      /> */}
    </Tab.Navigator>
  );
};
