import React from "react";
import { View,Text, StyleSheet } from "react-native";
import Colors from "../../constants.js/colors";

const GuessLogItem = ({roundNumber , guessRound}) => {
    return(
     <View style={styles.listItem}>
        <Text>#{roundNumber}</Text>
        <Text>Opponent Guess : {guessRound}</Text>
     </View>
    );
}
const styles = StyleSheet.create({
listItem:{
    borderBottomWidth:1,
    borderColor:Colors.primary800,
    borderRadius:40,
    color:'black',
    backgroundColor:Colors.accent500,
    padding: 12,
    marginVertical:8,
    flexDirection:'row',
    justifyContent:'space-between',
    width: '100%',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
}
})

export default GuessLogItem;