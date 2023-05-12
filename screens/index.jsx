import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Index = () => {
  return (
    <View styles={styles.container}>
      <Text>Index</Text>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
