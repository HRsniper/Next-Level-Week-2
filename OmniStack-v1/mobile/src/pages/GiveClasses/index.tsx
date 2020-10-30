import React from 'react';
import { View, Text, Image, ImageBackground } from "react-native";
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

// import styles from './styles';
import {styles} from './styles';

import giveClassesBgImage from "../../assets/images/give-classes-background.png";

export function GiveClasses(){

  const {goBack} = useNavigation();

  function handleNavigationToLadingPage() {
    goBack();
  }

  return (
    
    <View style={styles.container}>

    <ImageBackground resizeMode="contain" source={giveClassesBgImage} style={styles.content}>

    <Text style={styles.title}>Quer dar aulas?</Text>
    <Text style={styles.description}>primerio precisa se cadastrar</Text>

    </ImageBackground>

    <RectButton onPress={handleNavigationToLadingPage} style={styles.button}>
      <Text style={styles.buttonText}>Vamos La!</Text>
    </RectButton>

    </View>
  );
}

// export default Landing;