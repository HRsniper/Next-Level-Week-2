import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TextInput, Image } from "react-native";
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from "@expo/vector-icons";
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from "@react-native-community/async-storage";

import { PageHeader } from '../../components/PageHeader';
import { TeacherItem, Teacher } from '../../components/TeacherItem';
import { api } from "../../services/api";

// import styles from './styles';
import {styles} from './styles';


export function TeacherList(){

  const [filtersIsVisible, setFiltersIsVisible] = useState(false);

  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeek_day] = useState('');
  const [time, setTime] = useState('');

  function loadFavorites() {
    
    AsyncStorage.getItem('favorites').then((response) => {
      if (response) {
        const favoritesTeachers = JSON.parse(response);

        // array
        const favoritesTeachersIds = favoritesTeachers.map((teacher: Teacher) => {
          return teacher.id;
        });

        setFavorites(favoritesTeachersIds);
      }
    });
  }

  useFocusEffect(
    // O trecho React.useCallback vai evitar que a aplicação entre em loop conforme a própria documentação sugere.
    React.useCallback(() => {
      loadFavorites();
    }, [])
  );

  function handleToogleFiltersVisible() {
    setFiltersIsVisible(!filtersIsVisible);
  }

  async function handleFilterSubmit() {
    loadFavorites();

    // console.log({
    //   subject,week_day,time
    // });
    const response = await api.get('/classes',{
      params: {
        subject,
        week_day,
        time
      }
    });

    setFiltersIsVisible(!filtersIsVisible);
    setTeachers(response.data);
    // console.log(response.data);
  }

  return (
    
    <View style={styles.container}
      // contentContainerStyle={{
      //   paddingHorizontal: 16,
      //   paddingBottom: 16
      // }}
    >
      <PageHeader title='Proffys Disponiveis' 
        headerRight={(
          <BorderlessButton onPress={handleToogleFiltersVisible}> 
            <Feather name="filter" size={28} color="#fff" />
          </BorderlessButton>
      )}>

        { filtersIsVisible && ( 
          <View style={styles.searchForm}>
            <Text style={styles.label}>materia</Text>
            <TextInput style={styles.input} placeholder='Qual materia?' placeholderTextColor='#c1bccc'
              value={subject}
              onChangeText={(text) => { setSubject(text) }}
            />
            {/* usar react native community piker */}

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>dia da semana</Text>
                <TextInput style={styles.input} placeholder='Qual dia?' placeholderTextColor='#c1bccc'
                  value={week_day}
                  onChangeText={(text) => { setWeek_day(text) }}
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>horario</Text>
                <TextInput style={styles.input} placeholder='Qual horario?' placeholderTextColor='#c1bccc'
                  value={time}
                  onChangeText={(text) => { setTime(text) }}
                />
              </View>
            </View>
            
              <RectButton style={styles.submitButton} onPress={handleFilterSubmit}>
                <Text style={styles.submitButtonText}>Filtrar</Text>
              </RectButton>
          </View>
        )}
      </PageHeader>
      
      <ScrollView style={styles.teacherList}>
        {teachers.map((teacher: Teacher) => {
          return (
            <TeacherItem key={teacher.id} teacher={teacher}
              favorite={favorites.includes(teacher.id)}
            />
          )})}
        
      </ScrollView>
    </View>
  );
}

// export default Landing;