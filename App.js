/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './app/screen/StartGameScreen';
import LinearGradient from 'react-native-linear-gradient';
import GameScreen from './app/screen/GameScreen';
import Colors from './app/constants.js/colors';
import GameOverScreen from './app/screen/GameOverScreen';


const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  function startGameHandler() {
  setUserNumber(null);
  setGuessRounds(0);
  }

  let screen = < StartGameScreen onPickNumber={pickedNumberHandler} />

  if (userNumber) {
    screen = < GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen
      userNumber={userNumber}
      roundNumber={guessRounds}
      onStartGame={startGameHandler}
    />
  }



  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootContainer} >
      <ImageBackground
        source={require('./app/assets/background.png')}
        resizeMode='cover'
        style={styles.rootContainer}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootContainer}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  }
});

export default App;
