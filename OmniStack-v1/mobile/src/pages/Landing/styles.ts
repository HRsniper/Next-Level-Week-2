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

    banner:{
        width:'100%',
        resizeMode:'contain'
    },
    
    title:{
        alignSelf: 'center',
        fontFamily: 'Poppins_400Regular',
        color:'#fff',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80
    },

    titleBold: {
        fontFamily: 'Poppins_700Bold'
    },

    buttonsContainer:{
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between'
    },

    button:{
        height: 150,
        width: '48%',
        backgroundColor: '#333',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between'
    },

    buttonPrimary:{
        backgroundColor:'#9871f5'
    },
    
    buttonText:{
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 20
    },
    
    buttonSecondary:{
        backgroundColor:'#04d361'
    },

    totalConnections: {
        alignSelf: 'center',
        fontFamily: 'Poppins_400Regular',
        color: '#d4c2ff',
        marginTop: 10,
        fontSize: 12,
        maxHeight: 140,
        lineHeight: 20
    }

});

// export default styles;