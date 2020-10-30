import React, { useState, FormEvent } from "react";

import { PageHeader } from "../../components/PageHeader";
import { TeacherItem, Teacher } from "../../components/TeacherItem";
import { Input } from "../../components/Inputs";
import { Select } from "../../components/Selects";
import { api } from "../../services/api";
import { Subject, WeekDay } from "../../components/Dados";

import { TeacherListStyles } from "./styles";

export function TeacherList() {
    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState("");
    const [week_day, setWeek_day] = useState("");
    const [time, setTime] = useState("");

    async function searchTeachers(event: FormEvent) {
        event.preventDefault();

        const response = await api.get("/classes", {
            params: {
                subject,
                week_day,
                time,
            },
        });

        setTeachers(response.data);
        console.log(response.data);
        // console.log({
        //   subject,
        //   week_day,
        //   time
        // });
    }

    return (
        <>
            <TeacherListStyles />

            <div id="page-teacher-list" className="container">
                <PageHeader title="Proffys Disponíveis">
                    <form id="search-teachers" onSubmit={searchTeachers}>
                        <Select
                            name="subject"
                            label="Matéria"
                            value={subject}
                            onChange={(event) => {
                                setSubject(event.target.value);
                            }}
                            options={Subject}
                        />

                        <Select
                            name="week_day"
                            label="dia da semana"
                            value={week_day}
                            onChange={(event) => {
                                setWeek_day(event.target.value);
                            }}
                            options={WeekDay}
                        />
                        <Input
                            name="time"
                            label="hora"
                            type="time"
                            id="time"
                            value={time}
                            onChange={(event) => {
                                setTime(event.target.value);
                            }}
                        />

                        <button type="submit">Buscar</button>
                    </form>
                </PageHeader>

                <main>
                    {teachers.map((teacher: Teacher) => {
                        return <TeacherItem key={teacher.id} teacher={teacher} />;
                    })}
                </main>
            </div>
        </>
    );
}
