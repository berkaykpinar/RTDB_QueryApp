import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/Tip2";
import Tip1 from "../screens/Tip1";
import { globalStyles } from "../styles/global";
import MapScreen from "../screens/mapScreen";
import Tip21 from "../screens/Tip2.1";
import Tip3 from "../screens/Tip3";
import Tip31 from "../screens/Tip3.1";

export const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode="float">
    <Screen
      name="Home"
      options={{
        title: "Lokasyon sorgu",
        headerStyle: { backgroundColor: "coral" },
        headerTitleStyle: globalStyles.titleText,
      }}
      component={Home}
    />
    <Screen
      name="Tip1"
      options={{
        title: "Tip 1 sorgusu",
        headerStyle: { backgroundColor: "green" },
        headerTitleStyle: globalStyles.titleText,
      }}
      component={Tip1}
    />
    <Screen
      name="Details"
      options={{
        title: "Tip 2 sorgusu",
        headerStyle: { backgroundColor: "green" },
        headerTitleStyle: globalStyles.titleText,
      }}
      component={ReviewDetails}
    />
    <Screen
      name="Tip21"
      options={{
        title: "Sonuçlar",
        headerStyle: { backgroundColor: "green" },
        headerTitleStyle: globalStyles.titleText,
      }}
      component={Tip21}
    />
    <Screen
      name="Tip3"
      options={{
        title: "Tip3",
        headerStyle: { backgroundColor: "green" },
        headerTitleStyle: globalStyles.titleText,
      }}
      component={Tip3}
    />
    <Screen
      name="Tip31"
      options={{
        title: "Sonuç",
        headerStyle: { backgroundColor: "green" },
        headerTitleStyle: globalStyles.titleText,
      }}
      component={Tip31}
    />

    <Screen
      name="MapScreen"
      options={{
        title: "Map info",
        headerStyle: { backgroundColor: "green" },
        headerTitleStyle: globalStyles.titleText,
      }}
      component={MapScreen}
    />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);

export default HomeNavigator;
