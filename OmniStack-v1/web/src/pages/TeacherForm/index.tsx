import React, { useState, FormEvent } from "react";

import { useHistory } from "react-router-dom";

import { PageHeader } from "../../components/PageHeader";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Select } from "../../components/Select";
import { api } from "../../services/api";

import warningIcon from "../../assets/images/icons/warning.svg";

import "./styles.css";

function TeacherForm() {
    const history = useHistory();

    // const [name, setName] = useState([''] as unknown as  string[]);
    // const [name, setName] = useState<string[]>(['']);
    const [name, setName] = useState([""]);
    const [avatar, setAvatar] = useState([""]);
    const [whatsapp, setWhatsapp] = useState([""]);
    const [bio, setBio] = useState([""]);

    const [subject, setSubject] = useState([""]);
    const [cost, setCost] = useState([""]);

    const [scheduleItems, setScheduleItems] = useState([
        // retorna um array
        // const scheduleItems = useState([
        { week_day: 0, from: "", to: "" },
    ]);

    function addNewScheduleItem() {
        // console.log('novo horario');
        setScheduleItems([...scheduleItems, { week_day: 0, from: "", to: "" }]);
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
                                setName([event.target.value]);
                            }}
                        />

                        <Input
                            name="avatar"
                            label="Link da sua foto (https://)"
                            type="url"
                            value={avatar}
                            onChange={(event) => {
                                setAvatar([event.target.value]);
                            }}
                        />

                        <Input
                            name="whatsapp"
                            label="Numero (somente números)"
                            type="number"
                            value={whatsapp}
                            onChange={(event) => {
                                setWhatsapp([event.target.value]);
                            }}
                        />

                        <Textarea
                            name="bio"
                            label="Biografia"
                            value={bio}
                            onChange={(event) => {
                                setBio([event.target.value]);
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
                                setSubject([event.target.value]);
                            }}
                            options={[
                                { value: "1", label: "lorem1" },
                                { value: "2", label: "lorem12" },
                                { value: "3", label: "lorem13" },
                                { value: "4", label: "lorem14" },
                                { value: "5", label: "lorem15" },
                                { value: "6", label: "lorem16" },
                                { value: "7", label: "lorem17" },
                                { value: "8", label: "lorem18" },
                                { value: "9", label: "lorem19" },
                                { value: "10", label: "lorem10" },
                            ]}
                        />
                        {/* react-select pacote para personalizar o select */}

                        <Input
                            name="cost"
                            label="Custo/hora"
                            value={cost}
                            onChange={(event) => {
                                setCost([event.target.value]);
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

                        {scheduleItems.map((scheduleItem) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select
                                        name="week_day"
                                        label="dia da semana"
                                        value={scheduleItem.week_day}
                                        onChange={(event) => {
                                            setScheduleItemValue(0, "week_day", event.target.value);
                                        }}
                                        options={[
                                            { value: "0", label: "lorem-day0" },
                                            { value: "1", label: "lorem-day1" },
                                            { value: "2", label: "lorem-day2" },
                                            { value: "3", label: "lorem-day3" },
                                            { value: "4", label: "lorem-day4" },
                                            { value: "5", label: "lorem-day5" },
                                            { value: "6", label: "lorem-day6" },
                                        ]}
                                    />
                                    <Input
                                        name="from"
                                        label="das"
                                        type="time"
                                        value={scheduleItem.from}
                                        onChange={(event) => {
                                            setScheduleItemValue(0, "from", event.target.value);
                                        }}
                                    />

                                    <Input
                                        name="to"
                                        label="ate"
                                        type="time"
                                        value={scheduleItem.to}
                                        onChange={(event) => {
                                            setScheduleItemValue(0, "to", event.target.value);
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
    );
}

export default TeacherForm;
