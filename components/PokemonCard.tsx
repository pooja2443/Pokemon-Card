import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface PokemonProps {
  name: string;
  image: any; 
  type: string;
  hp: number;
  moves: string[];
  weaknesses: string[];
}


const getTypeDetails = (type: string) => {
  switch(type.toLowerCase()){
    case "electric":
      return {borderColor: "#FFD700", emoji : <FontAwesome name="bolt" size={20}></FontAwesome>}
    case "water":
      return {borderColor: "#6493EA", emoji : <FontAwesome name="tint" size={20}></FontAwesome>}
    case "fire":
      return {borderColor: "#FF5733", emoji : <FontAwesome name="fire" size={20}></FontAwesome>}
    case "grass":
      return {borderColor: "#66CC66", emoji : <FontAwesome name="leaf" size={20}></FontAwesome>}
    default:
      return {borderColor: "#A0A0A0", emoji : <FontAwesome name="question-circle" size={20}></FontAwesome>}
  }
}

const PokemonCard: React.FC<PokemonProps> = ({ name, image, type, hp, moves, weaknesses }) => {
  const {borderColor , emoji} = getTypeDetails(type);

  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>Hp: {hp}</Text>
      </View>

      <Image source={image} style={styles.image} resizeMode="contain" />

      <View style={styles.typeContainer}>
        <View style={[styles.badge, {borderColor}]}>
          <Text style={styles.typeEmoji}>{emoji}</Text>
          <Text style={styles.typeText}>{type}</Text> 
        </View>
     </View>

     <View style={styles.movesContainer}>
        <Text style={styles.movesText}>Moves: {moves.join(", ")}</Text>
      </View>

      <View style={styles.weaknessContainer}>
        <Text style={styles.weaknessText}>Weaknesses: {weaknesses.join(", ")}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    card: {
      backgroundColor: "white",
      padding: 16,
      margin : 16,
      borderRadius: 16,
      borderWidth : 2,
      elevation : 5
    },
    nameContainer: {
        flexDirection :"row",
        justifyContent : "space-between",
        marginBottom : 32
    },
    name : {
        fontSize : 30,
        fontWeight: "bold"
    },
    hp: {
        fontSize : 22
    },
    image : {
        width : "100%",
        height : 200,
        marginBottom :16
    },
    typeContainer : {
      marginBottom : 40,
      alignItems : "center"
    },
    badge : {
      flexDirection : "row",
      alignItems : "center",
      paddingVertical : 6,
      paddingHorizontal : 12,
      borderRadius : 20,
      borderWidth : 4
    },
    typeEmoji : {
      fontSize : 30,
      marginRight : 12
    },
    typeText : {
      fontSize : 22,
      fontWeight : "bold"
    },
    movesContainer: {
      marginBottom : 16
    },
    movesText : {
      fontSize : 22,
      fontWeight : "bold"
    },
    weaknessContainer:{
      marginBottom: 16
    },
    weaknessText : {
      fontSize: 22,
      fontWeight : "bold"
    }
    });

export default PokemonCard;
