import React from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import { globalStyles } from "../styles/global";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
let dists = [
  [100, 0],
  [100, 0],
  [100, 0],
  [100, 0],
  [100, 0],
];
let data = new Array();
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

async function getDist(date1, date2) {
  for (let i = 0; i < 2100; i++) {
    var starCountRef = firebase.database().ref("taxi/" + i);
    starCountRef.on("value", (snapshot) => {
      const data = snapshot.val();
      //console.log(date1 + " " + data.tpep_dropoff_datetime + " " + date2);
      for (let k = 0; k < 5; k++) {
        if (
          data.trip_distance < dists[k][0] &&
          date1 <= data.tpep_dropoff_datetime &&
          data.tpep_dropoff_datetime <= date2 &&
          data.trip_distance != 0
        ) {
          dists[k][0] = data.trip_distance;
          dists[k][1] = i;
          break;
        }
      }
    });
  }
}
function setData() {
  for (let j = 0; j < 5; j++) {
    var starCountRef = firebase.database().ref("taxi/" + dists[j][1]);
    starCountRef.on("value", (snapshot) => {
      data[j] = snapshot.val();
    });
  }
}

const Tip21 = ({ navigation, route }) => {
  for (let k = 0; k < 5; k++) {
    data[k] = x;
  }

  let dt1, dt2;
  const { date1, date2 } = route.params;
  console.log("date1 " + date1);
  console.log("Date2 :" + date2);

  if (date1 < 10) {
    dt1 = "2020-12-0" + date1;
  } else {
    dt1 = "2020-12-" + date1;
  }

  if (date2 < 10) {
    dt2 = "2020-12-0" + date2;
  } else {
    dt2 = "2020-12-" + date2;
  }
  getDist(dt1, dt2);
  getDist(dt1, dt2);

  for (let k = 0; k < 5; k++) {
    console.log(dists[k][0]);
  }

  setData();

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
    {
      index: dists[1][1],
      date: data[1].tpep_dropoff_datetime,
      dist: data[1].trip_distance,
      doLocation: data[1].DOLocationID,
      pulocation: data[1].PULocationID,
      passangerCount: data[1].passenger_count,
      totalAmount: data[1].total_amount,
    },
    {
      index: dists[2][1],
      date: data[2].tpep_dropoff_datetime,
      dist: data[2].trip_distance,
      doLocation: data[2].DOLocationID,
      pulocation: data[2].PULocationID,
      passangerCount: data[2].passenger_count,
      totalAmount: data[2].total_amount,
    },
    {
      index: dists[3][1],
      date: data[3].tpep_dropoff_datetime,
      dist: data[3].trip_distance,
      doLocation: data[3].DOLocationID,
      pulocation: data[3].PULocationID,
      passangerCount: data[3].passenger_count,
      totalAmount: data[3].total_amount,
    },
    {
      index: dists[4][1],
      date: data[4].tpep_dropoff_datetime,
      dist: data[4].trip_distance,
      doLocation: data[4].DOLocationID,
      pulocation: data[4].PULocationID,
      passangerCount: data[4].passenger_count,
      totalAmount: data[4].total_amount,
    },
  ];
  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleDetails}>
          {date1} Aralık - {date2} Aralık arasında seyahat edilen en az mesafeli
          5 yolculuk
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
          Index No: {dist[1].index} {"\n"}
          Tarih : {dist[1].date} {"\n"}
          Mesafe:{dist[1].dist} {"\n"}
          Başlangıç Noktası Id'si:{dist[1].pulocation} {"\n"}
          Varış Noktası Id'si: {dist[1].doLocation}
          {"\n"}
          Yolcu Sayısı : {dist[1].passangerCount} {"\n"}
          Toplam Ücret : {dist[1].totalAmount}
        </Text>
        <Text style={globalStyles.resultTip1}>
          Index No: {dist[2].index} {"\n"}
          Tarih : {dist[2].date} {"\n"}
          Mesafe:{dist[2].dist} {"\n"}
          Başlangıç Noktası Id'si:{dist[2].pulocation} {"\n"}
          Varış Noktası Id'si: {dist[2].doLocation}
          {"\n"}
          Yolcu Sayısı : {dist[2].passangerCount} {"\n"}
          Toplam Ücret : {dist[2].totalAmount}
        </Text>
        <Text style={globalStyles.resultTip1}>
          Index No: {dist[3].index} {"\n"}
          Tarih : {dist[3].date} {"\n"}
          Mesafe:{dist[3].dist} {"\n"}
          Başlangıç Noktası Id'si:{dist[3].pulocation} {"\n"}
          Varış Noktası Id'si: {dist[3].doLocation}
          {"\n"}
          Yolcu Sayısı : {dist[3].passangerCount} {"\n"}
          Toplam Ücret : {dist[3].totalAmount}
        </Text>
        <Text style={globalStyles.resultTip1}>
          Index No: {dist[4].index} {"\n"}
          Tarih : {dist[4].date} {"\n"}
          Mesafe:{dist[4].dist} {"\n"}
          Başlangıç Noktası Id'si:{dist[4].pulocation} {"\n"}
          Varış Noktası Id'si: {dist[4].doLocation}
          {"\n"}
          Yolcu Sayısı : {dist[4].passangerCount} {"\n"}
          Toplam Ücret : {dist[4].totalAmount}
        </Text>

        <Button
          title={"Ana sayfaya dön"}
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </ScrollView>
  );
};

export default Tip21;
