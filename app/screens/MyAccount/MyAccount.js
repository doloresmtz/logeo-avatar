import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";

import MyAccountGuest from "../../components/MyAccount/MyAccountGuest";
import MyAccountUser from "../../components/MyAccount/MyAccountUser";

import * as firebase from "firebase";
import { throwIfAudioIsDisabled } from "expo-av/build/Audio/AudioAvailability";

export default class MyAccount extends Component {
  constructor() {
    super();
    this.state = {
      login: false
    };
  }

  async componentDidMount() {
    await firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          login: true
        });
      } else {
        this.setState({
          login: false
        });
      }
    });
  }

  logout = () => {
    console.log("Cerrando sesión...");
    firebase.auth().signOut();
  };

  goToScreen = nameScreen => {
    console.log(nameScreen);
    this.props.navigation.navigate(nameScreen);
  };

  render() {
    const { login } = this.state;
    if (login) {
      return <MyAccountUser goToScreen={this.goToScreen} />;
    } else {
      return <MyAccountGuest goToScreen={this.goToScreen} />;
    }
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
