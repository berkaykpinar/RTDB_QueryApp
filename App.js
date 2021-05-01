//Yazılım labaratuarı 2 - 2. Proje - "Mobil Sorgu"
//Berkay Akpınar 180201112
//Esra Gerekmen 160201021

import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Home from "./screens/home";
import About from "./screens/Tip1";
import { AppNavigator } from "./routes/AppNavigator";
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

export default function App() {
  return <AppNavigator />;
}
