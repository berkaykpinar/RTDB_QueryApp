import React, { useState } from "react";
import { Text, View, Button, Platform } from "react-native";
import { globalStyles } from "../styles/global";
import DateTimePicker from "@react-native-community/datetimepicker";

const Tip3 = ({ navigation }) => {
  const [date1, setDate1] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show1, setShow1] = useState(false);
  const [myText1, setMyText1] = useState("01-01-2020");

  const onChange1 = (event, selectedDate) => {
    const currentDate = selectedDate || date1;
    setShow1(Platform.OS === "ios");
    setDate1(currentDate);
    console.log(currentDate);
  };
  const showMode1 = (currentMode) => {
    setShow1(true);
    setMode(currentMode);
  };
  const showDatepicker1 = () => {
    showMode1("date");
  };
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleDetails}>
        En uzun seyahati bulmak için bir gün seç:
      </Text>
      <View>
        <Button onPress={showDatepicker1} title="Gün seç" />
      </View>
      {show1 && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date1}
          display="default"
          onChange={onChange1}
          minimumDate={new Date(2020, 11, 1)}
          maximumDate={new Date(2020, 11, 31)}
        />
      )}
      <Text
        onPress={() => setMyText1(date1.toString())}
        style={globalStyles.titleDetails}
      >
        Başlangıç Tarihi : {myText1}
      </Text>

      <Text></Text>
      <Button
        title={"Ara "}
        onPress={() =>
          navigation.navigate("Tip31", {
            date1: date1.getDate(),
          })
        }
      />
      <Text></Text>
    </View>
  );
};

export default Tip3;
