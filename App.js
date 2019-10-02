import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// install react-navigation

//TODO: import four screens
import HomeScreen from "./screens/HomeScreen";
import AddNewContact from "./screens/AddNewContact";
import ViewContact from "./screens/ViewContact";
import EditContact from "./screens/EditContact";

//TODO: import firebase
import * as firebase from "firebase";


var firebaseConfig = {
  apiKey: "AIzaSyC7KoWcGMdGg-RPovt5w8aBmT_1Z0GefoE",
  authDomain: "reactfirebase-260dc.firebaseapp.com",
  databaseURL: "https://reactfirebase-260dc.firebaseio.com",
  projectId: "reactfirebase-260dc",
  storageBucket: "reactfirebase-260dc.appspot.com",
  messagingSenderId: "596239657942",
  appId: "1:596239657942:web:0653fd8dea66cf1d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// set up react navigation
import {  createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Add: { screen: AddNewContact },
    View: { screen: ViewContact },
    Edit: { screen: EditContact }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#fff"
      },
      headerTitleStyle: {
        color: "black"
      }
    }
  }
);

export default createAppContainer(AppNavigator);