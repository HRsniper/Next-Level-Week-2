import React, { useState, FormEvent } from "react";

import { useHistory } from "react-router-dom";

import { PageHeader } from "../../components/PageHeader";
import { Input } from "../../components/Inputs";
import { Textarea } from "../../components/Textarea";
import { Select } from "../../components/Selects";
import { api } from "../../services/api";
import { Subject, WeekDay } from "../../components/Dados";

import warningIcon from "../../assets/images/icons/warning.svg";

import { TeacherFormStyles } from "./styles";

export function TeacherForm() {
    const history = useHistory();

    // const [name, setName] = useState([''] as unknown as  string[]);
    // const [name, setName] = useState<string[]>(['']);
    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [bio, setBio] = useState("");

    const [subject, setSubject] = useState("");
    const [cost, setCost] = useState("");

    const [scheduleItems, setScheduleItems] = useState([
        // retorna um array
        // const scheduleItems = useState([
        { week_day: "", from: "", to: "" },
    ]);

    function addNewScheduleItem() {
        // console.log('novo horario');
        setScheduleItems([...scheduleItems, { week_day: "", from: "", to: "" }]);
    }

    function handleCreateClass(event: FormEvent) {
        event.preventDefault();
        // console.log(
        //   {name,avatar,whatsapp,bio,subject,cost,scheduleItems}
        // );

        api.post("/classes", {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems,
        })
            .then(() => {
                alert("Cadastrado Com Successo");

                history.push("/"); //redirecionando para landing
            })
            .catch((error) => {
                alert(error);
            });
    }

    // setScheduleItemValue(0, 'week_day, '2') dia 2
    // scheduleItems.map([{ week_day:0, from: '', to: ''}], 0)
    // if(0===0)  return [{ week_day:value, from: '', to: ''}]

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value };
                //                        sobre escrever field com novo valor
            }
            return scheduleItem;
        });
        // console.log(newArray);

        setScheduleItems(updateScheduleItems);
    }

    return (
        <>
            <TeacherFormStyles />

            <div id="page-teacher-form" className="container">
                <PageHeader
                    title="Preencha o formulário para Dar Aulas"
                    description="Preencha todos os campos"
                />

                <section>
                    <form onSubmit={handleCreateClass}>
                        {/* <form id="create-class" action="" method="post" onSubmit={handleCreateClass}> */}
                        <fieldset>
                            <legend>Seus Dados</legend>

                            <Input
                                name="name"
                                label="Nome completo"
                                type="text"
                                value={name}
                                onChange={(event) => {
                                    setName(event.target.value);
                                }}
                            />

                            <Input
                                name="avatar"
                                label="Link da sua foto (https://)"
                                type="url"
                                value={avatar}
                                onChange={(event) => {
                                    setAvatar(event.target.value);
                                }}
                            />

                            <Input
                                name="whatsapp"
                                label="Numero (somente números)"
                                type="number"
                                value={whatsapp}
                                onChange={(event) => {
                                    setWhatsapp(event.target.value);
                                }}
                            />

                            <Textarea
                                name="bio"
                                label="Biografia"
                                value={bio}
                                onChange={(event) => {
                                    setBio(event.target.value);
                                }}
                            />
                        </fieldset>

                        <fieldset>
                            <legend>Sobre a aula</legend>

                            <Select
                                name="subject"
                                label="Matéria"
                                value={subject}
                                onChange={(event) => {
                                    setSubject(event.target.value);
                                }}
                                options={Subject}
                            />
                            {/* react-select pacote para personalizar o select */}

                            <Input
                                name="cost"
                                label="Custo/hora"
                                value={cost}
                                onChange={(event) => {
                                    setCost(event.target.value);
                                }}
                            />
                        </fieldset>

                        <fieldset id="schedule-items">
                            <legend>
                                Horarios
                                <button type="button" id="add-time" onClick={addNewScheduleItem}>
                                    + Novo horario
                                </button>
                            </legend>

                            {scheduleItems.map((scheduleItem, index) => {
                                return (
                                    <div key={scheduleItem.week_day} className="schedule-item">
                                        <Select
                                            name="week_day"
                                            label="dia da semana"
                                            value={scheduleItem.week_day}
                                            onChange={(event) => {
                                                setScheduleItemValue(index, "week_day", event.target.value);
                                            }}
                                            options={WeekDay}
                                        />

                                        <Input
                                            name="from"
                                            label="das"
                                            type="time"
                                            value={scheduleItem.from}
                                            onChange={(event) => {
                                                setScheduleItemValue(index, "from", event.target.value);
                                            }}
                                        />

                                        <Input
                                            name="to"
                                            label="ate"
                                            type="time"
                                            value={scheduleItem.to}
                                            onChange={(event) => {
                                                setScheduleItemValue(index, "to", event.target.value);
                                            }}
                                        />
                                    </div>
                                );
                            })}
                        </fieldset>

                        <footer>
                            <p>
                                <img src={warningIcon} alt="aviso importante" />
                                importante! <br /> Preencha todos os campos
                            </p>

                            {/* <button type="submit" form="create-class">Salvar cadastro</button> */}
                            <button type="submit">Salvar cadastro</button>
                        </footer>
                    </form>
                </section>
            </div>
        </>
    );
}
