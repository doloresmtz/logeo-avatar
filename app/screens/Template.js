import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class Template extends Component {
  render() {
    return (
      <View style={styles.viewBody}>
        <Text>TopFive Scrren</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  }
});
