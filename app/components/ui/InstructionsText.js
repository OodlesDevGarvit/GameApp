import React from "react";
import { Text, StyleSheet } from "react-native";
import Colors from "../../constants.js/colors";


const InstructionsText = ({ children , style }) => {
    return (
        <Text style={[styles.inputText , style]}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    inputText: {
        color: Colors.accent500,
        fontSize: 24,
    },
});

export default InstructionsText;