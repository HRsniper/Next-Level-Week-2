import React, { useState, useEffect } from 'react';
import { View, ScrollView, AsyncStorage } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import { PageHeader } from '../../components/PageHeader';
import { TeacherItem, Teacher } from '../../components/TeacherItem';

// import styles from './styles';
import {styles} from './styles';

export function Favorites(){

  const [favorites, setFavorites] = useState([]);

  function loadFavorites() {
    
    AsyncStorage.getItem('favorites').then((response) => {
      if (response) {
        const favoritesTeachers = JSON.parse(response);

        setFavorites(favoritesTeachers);
      }
    });
  }

  // useFocusEffect(() => {
  //   loadFavorites();
  // });
  useFocusEffect(
    // O trecho React.useCallback vai evitar que a aplicação entre em loop conforme a própria documentação sugere.
    React.useCallback(() => {
      loadFavorites();
    }, [])
  );

  return (
    
    <View style={styles.container}>
      <PageHeader title='favoritos'/>

      <ScrollView style={styles.teacherList}>
         {favorites.map((teacher: Teacher) => {
           return ( <TeacherItem key={teacher.id} teacher={teacher} favorite={true} /> );
         })}
      </ScrollView>
    </View>
  );
}

// export default Landing;