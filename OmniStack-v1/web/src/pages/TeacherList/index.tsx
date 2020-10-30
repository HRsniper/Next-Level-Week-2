import React, { useState, FormEvent } from "react";

import { PageHeader } from "../../components/PageHeader";
import { TeacherItem, Teacher } from "../../components/TeacherItem";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { api } from "../../services/api";

import './styles.css';

function TeacherList() {

  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeek_day] = useState('');
  const [time, setTime] = useState('');

  
    async function searchTeachers(event: FormEvent) {
      event.preventDefault();
  
      const response = await api.get('/classes',{
        params: {
          subject,
          week_day,
          time
        }
      });
  
      setTeachers(response.data);
      // console.log(response.data)
      // console.log({
      //   subject,
      //   week_day,
      //   time
      // });
    }
  
    return (
      <div id="page-teacher-list" className="container">
        <PageHeader title="Proffys Disponíveis">
          <form id="search-teachers"  onSubmit={searchTeachers}>

          <Select 
          name="subject" 
          label="Matéria" 

          value={subject}
          onChange={(event) => { setSubject(event.target.value) }}

          options={[
            {value: '1', label: 'lorem1'},
            {value: '2', label: 'lorem12'},
            {value: '3', label: 'lorem13'},
            {value: '4', label: 'lorem14'},
            {value: '5', label: 'lorem15'},
            {value: '6', label: 'lorem16'},
            {value: '7', label: 'lorem17'},
            {value: '8', label: 'lorem18'},
            {value: '9', label: 'lorem19'},
            {value: '10', label: 'lorem10'}
          ]}
        />

          <Select 
            name="week_day" 
            label="dia da semana" 

            value={week_day}
            onChange={(event) => { setWeek_day(event.target.value) }}

            options={[
              {value: '0', label: 'lorem-day0'},
              {value: '1', label: 'lorem-day1'},
              {value: '2', label: 'lorem-day2'},
              {value: '3', label: 'lorem-day3'},
              {value: '4', label: 'lorem-day4'},
              {value: '5', label: 'lorem-day5'},
              {value: '6', label: 'lorem-day6'},
            ]}
          />
            <Input name="time" label="hora" type="time" id="time"
              value={time}
              onChange={(event) => { setTime(event.target.value) }}
            />

            <button type="submit">Buscar</button>
          </form>
        </PageHeader>

        <main>
          {teachers.map((teacher: Teacher) => {
            return <TeacherItem key={teacher.id} teacher={teacher} />
          })}
{/* 
          <TeacherItem />
          <TeacherItem />
          <TeacherItem /> */}
        </main>
      </div>
    );
}

export default TeacherList;