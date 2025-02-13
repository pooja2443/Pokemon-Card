import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import PokemonCard from "@/components/PokemonCard";

export default function App() {

  const charmanderData = {
    name : "Charmander",
    image: require("../assets/images/charmander.png"),
    type : "fire",
    hp : 39,
    moves: ["Scratch", "Ember","Growl","Leer"],
    weaknesses : ["Water","Rock"]
  }

  return(
    <SafeAreaView style={styles.container}>
      <PokemonCard {...charmanderData} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: "plum",
    paddingTop: 25
  }
})