import React from "react";
import { Text, View, Button, ScrollView } from "react-native";
import { globalStyles } from "../styles/global";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
let dists = [[0, 0]];
let data = new Array();
let pickUp, dropOff;
let x = {
  DOLocationID: "42",
  PULocationID: "39",
  RatecodeID: "1",
  VendorID: "2",
  congestion_surcharge: "0",
  extra: "0.5",
  fare_amount: "56.5",
  improvement_surcharge: "0.3",
  mta_tax: "0.5",
  passenger_count: 2,
  payment_type: "1",
  store_and_fwd_flag: "N",
  tip_amount: "2.75",
  tolls_amount: "6.12",
  total_amount: 66.67,
  tpep_dropoff_datetime: "2020-12-01",
  tpep_pickup_datetime: "2020-12-01",
  trip_distance: 20.64,
};
let y = {
  Borough: "Staten Island",
  LocationID: 99,
  Zone: "Freshkills Park",
  service_zone: "Boro Zone",
};

const firebaseConfig = {
  apiKey: "[YOUR_API_KEY]",
  authDomain: "yazlabfinal.firebaseapp.com",
  databaseURL: "https://yazlabfinal-default-rtdb.firebaseio.com",
  projectId: "yazlabfinal",
  storageBucket: "yazlabfinal.appspot.com",
  messagingSenderId: "767578650419",
  appId: "1:767578650419:web:fea5fd6e0935e66f4cf046",
  measurementId: "G-VX11T9LMRV",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

function getDist(date1) {
  for (let i = 0; i < 2180; i++) {
    var starCountRef = firebase.database().ref("taxi/" + i);
    starCountRef.on("value", (snapshot) => {
      const data = snapshot.val();
      if (
        data.trip_distance > dists[0][0] &&
        date1 == data.tpep_dropoff_datetime
      ) {
        dists[0][0] = data.trip_distance;
        dists[0][1] = i;
      }
    });
  }
}
function setData() {
  var starCountRef = firebase.database().ref("taxi/" + dists[0][1]);
  starCountRef.on("value", (snapshot) => {
    data[0] = snapshot.val();
  });
}

function getLocationName(pU, dO) {
  for (let i = 0; i < 263; i++) {
    var starCountRef = firebase.database().ref("zone/" + i);
    starCountRef.on("value", (snapshot) => {
      const data = snapshot.val();
      if (data.LocationID == pU) {
        pickUp = data;
      }
      if (data.LocationID == dO) {
        dropOff = data;
      }
    });
  }
}
const Tip31 = ({ navigation, route }) => {
  data[0] = x;
  dropOff = y;
  pickUp = y;

  let dt1;
  const { date1 } = route.params;

  if (date1 < 10) {
    dt1 = "2020-12-0" + date1;
  } else {
    dt1 = "2020-12-" + date1;
  }

  getDist(dt1);
  setData();
  getLocationName(data[0].PULocationID, data[0].DOLocationID);
  const dist = [
    {
      index: dists[0][1],
      date: data[0].tpep_dropoff_datetime,
      dist: data[0].trip_distance,
      doLocation: data[0].DOLocationID,
      pulocation: data[0].PULocationID,
      passangerCount: data[0].passenger_count,
      totalAmount: data[0].total_amount,
    },
  ];

  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleDetails}>
          {date1} Aralık gününde seyahat edilen en uzun mesafe:
        </Text>

        <Text style={globalStyles.resultTip1}>
          Index No: {dist[0].index} {"\n"}
          Tarih : {dist[0].date} {"\n"}
          Mesafe:{dist[0].dist} {"\n"}
          Başlangıç Noktası Id'si:{dist[0].pulocation} {"\n"}
          Varış Noktası Id'si: {dist[0].doLocation}
          {"\n"}
          Yolcu Sayısı : {dist[0].passangerCount} {"\n"}
          Toplam Ücret : {dist[0].totalAmount}
        </Text>
        <Text style={globalStyles.resultTip1}>
          Başlangıç Noktası:{"\n"}
          Lokasyon ID :{pickUp.LocationID}
          {"\n"}
          İlçe : {pickUp.Borough}
          {"\n"}
          Servis Bölgesi: {pickUp.service_zone}
          {"\n"}
          Bölge: {pickUp.Zone}
        </Text>

        <Text style={globalStyles.resultTip1}>
          Varış Noktası:{"\n"}
          Lokasyon ID :{dropOff.LocationID}
          {"\n"}
          İlçe : {dropOff.Borough}
          {"\n"}
          Servis Bölgesi: {dropOff.service_zone}
          {"\n"}
          Bölge: {dropOff.Zone}
        </Text>

        <Button
          title="Harita için tıkla"
          onPress={() =>
            navigation.navigate("MapScreen", {
              pZone: pickUp.Zone,
              dZone: dropOff.Zone,
            })
          }
        />
        <Text></Text>
        <Button
          title={"Ana sayfaya dön"}
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </ScrollView>
  );
};

export default Tip31;
