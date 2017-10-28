import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import LoginScreen from "../login/LoginScreen.js";
import SideBar from "../../components/SideBar.js";
import { DrawerNavigator } from "react-navigation";
const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Login: { screen: LoginScreen },
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
