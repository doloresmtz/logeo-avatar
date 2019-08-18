import React from "react";
import { StyleSheet, Text, View } from "react-native";

import UserNavigation from "./app/navigation/User";

import { firebaseApp } from "./app/utils/FireBase";

export default function App() {
  return (
    <View style={styles.container}>
      <UserNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
