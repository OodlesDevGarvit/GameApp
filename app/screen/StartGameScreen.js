import React, { useState } from "react";
import { Alert, StyleSheet, TextInput, View , useWindowDimensions} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants.js/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionsText from "../components/ui/InstructionsText";

const StartGameScreen = ({ onPickNumber }) => {
    const [enteredNumber, setEnteredNumber] = useState('');
    const{width,height} =  useWindowDimensions();

    function inputHandler(text) {
        setEnteredNumber(text);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const choosenNumber = parseInt(enteredNumber);

        //we have to check whether the chosennumber is a number and it shold not a negative 
        // no and it also not greater than 99 .
        if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber >= 99) {
            Alert.alert(
                'Invalid Number !',
                'Number has to be a Number and in between 1 to 99',
                [{ text: 'okay', style: 'default', onPress: resetInputHandler }],
            )
            return;
        }
        onPickNumber(choosenNumber);

    }

    const marginTopDistance = height < 380 ? 30 : 100;

    return (
        <View style={[styles.rootContainer,{marginTop:marginTopDistance}]}>
            <Title>Guess My Number</Title>
            <Card >
                <InstructionsText >Enter a Number</InstructionsText>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType="numeric"
                    value={enteredNumber}
                    onChangeText={inputHandler}
                />
                <View style={styles.buttonsContainer}>


                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>

                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>

                </View>

            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
       alignItems: 'center',
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 26,
        borderBottomWidth: 2,
        borderBottomColor: Colors.accent500,
        marginBottom: 5,
        color: Colors.accent500,
        marginVertical: 8,
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    }

});

export default StartGameScreen;