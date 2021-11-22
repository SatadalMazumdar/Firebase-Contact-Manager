// install react-navigation

//TODO: import four screens
import HomeScreen from "./screens/HomeScreen";
import AddNewContact from "./screens/AddNewContact";
import EditContact from "./screens/EditContact";
import ViewContact from "./screens/ViewContact";

//TODO: import firebase
import * as firebase from "firebase";

// set up react navigation
import { createStackNavigator, createAppContainer } from "react-navigation";

const MainNavigator = createStackNavigator(
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
        backgroundColor: "#B83227"
      },
      headerTitleStyle: {
        color: "#fff"
      }
    }
  }
);

const App = createAppContainer(MainNavigator);

//TODO: Initialize Firebase
// Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA2-x0Ov--tIq_ROd_oHbpwDFxrXH84NSI",
  authDomain: "reactbootcamp-488e2.firebaseapp.com",
  databaseURL: "https://reactbootcamp-488e2.firebaseio.com",
  projectId: "reactbootcamp-488e2",
  storageBucket: "reactbootcamp-488e2.appspot.com",
  messagingSenderId: "845266293496",
  appId: "1:845266293496:web:6a013893b56d63f1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//FirebaseTODO create firebase real-time database with rules

// {
//   "rules": {
//     ".read": true,
//     ".write": true
//   }
// }
export default App;
