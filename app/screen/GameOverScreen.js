import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants.js/colors";
import PrimaryButton from "../components/ui/PrimaryButton";


const GameOverScreen = ({ userNumber, roundNumber, onStartGame }) => {
    return (
        <View style={styles.rootContainer}>
            <Title>Game Over !!</Title>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/success.png')}
                    style={styles.image}
                />
            </View>
            <Text style={styles.summaryText}>
                Your Phone needed <Text style={styles.highlight}>{roundNumber}</Text> Rounds to guess the Number
                <Text style={styles.highlight}>{userNumber}</Text>
            </Text>
            <PrimaryButton onPress={onStartGame}>Start New Game</PrimaryButton>
        </View>
    );
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: deviceWidth < 380 ? 150 : 300,
        height: deviceWidth < 380 ? 150 : 300,
        borderRadius: deviceWidth < 380 ? 75 : 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20,
    },
    highlight: {
        color: Colors.accent500,
    }
})

export default GameOverScreen;