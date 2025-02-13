import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface PokemonProps {
  name: string;
  image: any; 
  type: string;
  hp: number;
  moves: string[];
  weaknesses: string[];
}

const PokemonCard: React.FC<PokemonProps> = ({ name, image, type, hp, moves, weaknesses }) => {
  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>Hp: {hp}</Text>
      </View>

      <Image source={image} style={styles.image} resizeMode="contain" />

      <View>
        <Text style={styles.type}>{type}</Text>
     </View>

      <View>
        <Text>Moves: {moves.join(", ")}</Text>
      </View>

      <View>
        <Text>Weaknesses: {weaknesses.join(", ")}</Text>
      </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
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
    }
    });

export default PokemonCard;
