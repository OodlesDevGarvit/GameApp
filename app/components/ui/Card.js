import React from "react"
import { View, Dimensions, StyleSheet } from "react-native";
import Colors from "../../constants.js/colors";

const deviceWidth = Dimensions.get('window').width;

const Card = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: deviceWidth < 380 ? 18 : 36,
        marginHorizontal: 24,
        padding: 16,
        borderWidth: 1,
        borderBottomColor: 'black',
        borderRadius: 8,
        backgroundColor: Colors.primary800,
        elevation: 8,
    },
})

export default Card;