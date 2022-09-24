import { ScrollView, Image, Dimensions, StyleSheet, Text } from "react-native";
import React from "react";

const { height } = Dimensions.get("window");
const TopDesign = require("../assets/TopDesign.png");

const Login = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={require("../assets/TopDesign.png")}
      />
      <Text style={styles.headerText}>Sign Up</Text>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  image: {
    height: height / 2.8,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
  },
});
