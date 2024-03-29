import React from "react";
import { Text, StyleSheet } from "react-native";
import Colors from "../../constants.js/colors";


const Title = ({children}) => {
    return  <Text style={styles.title}>{children}</Text>
}


const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        // fontWeight:'bold',
        color:'white',
        textAlign:'center',
        borderWidth:2,
        borderColor:'white',
        padding:15,
        maxWidth:'80%',
        width:300,
    }
})
export default Title;