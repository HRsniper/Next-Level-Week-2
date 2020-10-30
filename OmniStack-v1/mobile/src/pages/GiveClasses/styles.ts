import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#8257e5',
        // alignItems: 'center',
        justifyContent: 'center',
        padding: 40
    },

    content:{
        flex: 1,
        justifyContent: 'center',
        // resizeMode: 'contain'
    },
    
    title:{
        alignSelf: 'center',
        fontFamily: 'Archivo_700Bold',
        color:'#fff',
        fontSize: 32,
        lineHeight: 37,
        maxHeight: 180
    },

    description: {
        alignSelf: 'center',
        marginTop: 24,
        color: '#d4c2ff',
        fontSize: 16,
        lineHeight: 16,
        fontFamily: 'Poppins_400Regular',
        maxHeight: 240
    },

    buttonsContainer:{
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between'
    },

    button:{
        backgroundColor: '#04d361',
        marginVertical: 40,
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        // padding: 24,
    },

    buttonText:{
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 16
    },

});

// export default styles;