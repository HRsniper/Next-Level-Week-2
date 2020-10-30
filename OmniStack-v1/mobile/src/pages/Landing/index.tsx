import React, { useState, useEffect } from 'react';
import { View, Text, Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import { api } from "../../services/api";

// import styles from './styles';
import {styles} from './styles';

import landingImg from "../../assets/images/landing.png";
import studyIcon from "../../assets/images/icons/study.png";
import giveClassesIcon from "../../assets/images/icons/give-classes.png";
import purpleHeartIcon from "../../assets/images/icons/heart.png";

export function Landing(){

  const [totalConnections, setTotalConnections] = useState(0);

  // useEffect((função call back) => {}, [array de dependências]);
  // quando array de dependências mudar aciona a função call back

  useEffect(() => {
    api.get('/connections')
      .then((response) => {
        // console.warn(response);
        const total = response.data.total;
        // const {total} = response.data;

        setTotalConnections(total);

      }).catch((reject) =>{
        console.error(reject);
      })
  }, []);


  // const navigation = useNavigation();
  const {navigate} = useNavigation();

  function handleNavigationToGiveClassesPage() {
    navigate('GiveClasses');
  }

  function handleNavigationToStudyPage() {
    navigate('StudyTabs');
  }

  return (
    
    <View style={styles.container}>

        <Image source={landingImg} style={styles.banner} />

        <Text style={styles.title}> seja bem-vindo,  {'\n'}
          <Text style={styles.titleBold}> o que deseja fazer? </Text>
        </Text>

      <View style={styles.buttonsContainer}>

        <RectButton onPress={handleNavigationToStudyPage} style={[styles.button, styles.buttonPrimary]}>
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>estudar</Text>
        </RectButton>

        <RectButton onPress={handleNavigationToGiveClassesPage} style={[styles.button, styles.buttonSecondary]}>
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>dar aulas</Text>
        </RectButton>

      </View>

      <Text style={styles.totalConnections}>
        total de {totalConnections} conexões ja realizadas {' '}
          <Image source={purpleHeartIcon} />
      </Text>

    </View>
  );
}

// export default Landing;