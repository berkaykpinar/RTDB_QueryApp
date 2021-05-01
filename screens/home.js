import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";

const Home = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      {/* <FlatList
        data={review}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", item)}
          >
            <Text style={globalStyles.titleDetails}>{item.title}</Text>
          </TouchableOpacity>
        )}
      /> */}
      <Button
        title="Tip 1 sorgu için tıklayınız !"
        onPress={() => navigation.navigate("Tip1")}
      />
      <Text style={globalStyles.titleText}></Text>
      <Button
        title="Tip 2 sorgu için tıklayınız !"
        onPress={() => navigation.navigate("Details")}
      />
      <Text style={globalStyles.titleText}></Text>
      <Button
        title="Tip 3 sorgu için tıklayınız ! !"
        onPress={() => navigation.navigate("Tip3")}
      />
      <Text style={globalStyles.titleText}></Text>
    </View>
  );
};

export default Home;
