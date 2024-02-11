import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants.js/colors";

const PrimaryButton = ({ children , onPress }) => {

    // We can do both way 
    // function pressHandler() {
    //     onPress();
    // }

    return (

        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) =>
                    pressed ?
                        [styles.buttonInnerContainer, styles.pressed]
                        : styles.buttonInnerContainer
                }
                // onPress={pressHandler}
                onPress={onPress}
                android_ripple={{ color: Colors.primary600 }}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>


    );
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        backgroundColor: Colors.primary500,
        borderRadius: 8,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75,
    }
})

export default PrimaryButton;