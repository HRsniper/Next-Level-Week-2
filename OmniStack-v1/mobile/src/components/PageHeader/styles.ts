import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        backgroundColor: '#8257e5',
        padding: 40
    },

    topBar:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between'
    },
    
    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 24,
        lineHeight: 32,
        maxHeight: 160,
        marginHorizontal: 40
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});

// export default styles;