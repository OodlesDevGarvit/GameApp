import React, { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants.js/colors";
const StartGameScreen = ({onPickNumber}) => {
    const [enteredNumber, setEnteredNumber] = useState('');


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

    return (
        <View style={styles.container}>
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

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80,
        marginHorizontal: 24,
        padding: 16,
        borderWidth: 1,
        borderBottomColor: 'black',
        borderRadius: 8,
        backgroundColor: Colors.primary800,
        elevation: 8,
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize:26,
        borderBottomWidth: 2,
        borderBottomColor:  Colors.accent500,
        marginBottom: 5,
        color:  Colors.accent500,
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