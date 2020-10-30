import React from 'react';
import { StatusBar } from 'expo-status-bar';
// import { View } from 'react-native';
import { AppLoading } from "expo";//componente de carregamento
import { Archivo_400Regular, Archivo_700Bold, useFonts } from "@expo-google-fonts/archivo";
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";


// import Landing from "./src/pages/Landing";
// import {Landing} from "./src/pages/Landing";
import { AppStack } from './src/routes/AppStack';

export default function App() {

  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return (
      <>
        <AppStack />
        <StatusBar style="auto" />
      </>
    );

  }
}