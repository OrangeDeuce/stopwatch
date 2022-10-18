import React, { useState } from "react";
import { View, Switch, StyleSheet, Text } from "react-native";

const ShutDownSwitch = (isEnabled, toggleSwitch) => {
  return (
    <View style={styles.container}>
      <Text>Max 60 min.</Text>
      <Switch onValueChange={toggleSwitch} value={isEnabled} />
      <Text>{isEnabled.toString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    borderColor: "red",
    borderWidth: 1,
    alignContent: "center",
  },
});

export default ShutDownSwitch;
