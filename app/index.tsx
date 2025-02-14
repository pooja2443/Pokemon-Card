import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
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
  const squirtleData = {
    name : "Squirtle",
    image: require("../assets/images/squirtle.png"),
    type : "water",
    hp : 44,
    moves: ["Tackle", "water gun","tail whip","withdraw"],
    weaknesses : ["Water","Rock"]
  }
  const bulbasaurData = {
    name : "Bulbasaur",
    image: require("../assets/images/bulbasaur.png"),
    type : "Grass",
    hp : 45,
    moves: ["Tackle", "Vine Whip","Growl","Leech speed"],
    weaknesses : ["Fire","Ice","Flying","Psychic"]
  }
  const pikachuData = {
    name : "Pikachu",
    image: require("../assets/images/pikachu.png"),
    type : "Electirc",
    hp : 35,
    moves: ["QuickAttack", "Thunderbolt", "Tail Whip","Growl"],
    weaknesses : ["Ground"]
  }

  return(
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokemonCard {...charmanderData} />
        <PokemonCard {...squirtleData} />
        <PokemonCard {...bulbasaurData} />
        <PokemonCard {...pikachuData} />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 25
  }
})