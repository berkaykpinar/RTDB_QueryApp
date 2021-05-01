import React from "react";
import { SafeAreaView, View } from "react-native";
import MapView, { Callout, Marker, MarkerAnimated } from "react-native-maps";
import { StyleSheet, Dimensions } from "react-native";
import MapViewDirections from "react-native-maps-directions";
const height = Dimensions.get("window").height;

const GOOGLE_MAPS_APIKEY = "[YOUR_API_KEY]";

const MapScreen = ({ navigation, route }) => {
  const { pZone, dZone } = route.params;

  console.log("Başlangıç :" + pZone + " Bitiş :" + dZone);
  return (
    <SafeAreaView>
      <MapView
        style={styles.map}
        loadingEnabled={true}
        region={{
          latitude: 40.73061,
          longitude: -73.935242,
          latitudeDelta: 0.2,
          longitudeDelta: 0.0121,
        }}
      >
        <MapViewDirections
          origin={pZone}
          destination={dZone}
          waypoints={[pZone, dZone]}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={4}
          strokeColor="hotpink"
        />
      </MapView>
    </SafeAreaView>
  );
  ("");
};
const styles = StyleSheet.create({
  map: {
    height,
  },
});

export default MapScreen;
