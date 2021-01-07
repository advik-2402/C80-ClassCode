import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { DrawerItems } from "react-navigation-drawer";

export default class SideBar extends Component {
  render() {
    return (
      <View>
        <View>
          <DrawerItems {...this.props} />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("WelcomeScreen");
              firebase.auth().signOut();
            }}
          >
            <Text>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
