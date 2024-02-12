import React, { useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionsText from "../components/ui/InstructionsText";


function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;


const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(
    1,
    100,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);


  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessHandler(direction) {
    // direction => 'lower' or 'Higher'

    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't Lie !", "You know that this is wrong ...", [
        { text: "sorry !!", style: 'cancel' }
      ])
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    console.log(minBoundary, maxBoundary);
    const newRndmNumber = generateRandomBetween(minBoundary, maxBoundary, userNumber);
    setCurrentGuess(newRndmNumber);
  }


  return (
    <View style={styles.screen}>
      <Title>Opponent Guess!</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>

        <InstructionsText style={styles.InstructionText}>Higher or Lower</InstructionsText>

        <View style={styles.buttonsContainer} >
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
          </View>
        </View>

      </Card>


    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,

  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
  InstructionText: {
    marginBottom:20,
  },

})

export default GameScreen;