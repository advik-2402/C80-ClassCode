import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppTabNavigator } from "./AppTabNavigator";
import { SideBar } from "../components/SideBar";
import Profile from '../'
export const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: AppTabNavigator,
    },
  },
  { contentComponent: SideBar },
  { initialRouteName: "Home" }
);
