import React from "react";
import { api } from "../../services/api";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import { TeacherItensStyles } from "./styles";

export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
}
interface TeacherItemProps {
    teacher: Teacher;
}

export const TeacherItem = ({ teacher }: TeacherItemProps) => {
// export const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
    function createNewConnection() {
        api.post("/connections", {
            user_id: teacher.id,
        });
    }

    return (
        <>
            <TeacherItensStyles />

            <article className="teacher-item">
                <header>
                    <img src={teacher.avatar} alt={teacher.name} />
                    <div>
                        <strong>{teacher.name}</strong>
                        <span>{teacher.subject}</span>
                    </div>
                </header>

                <p>{teacher.bio}</p>

                <footer>
                    <p>
                        Preço: R$
                        <strong>{teacher.cost}</strong>
                    </p>

                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={createNewConnection}
                        href={`https://wa.me/${teacher.whatsapp}`}
                    >
                        <img src={whatsappIcon} alt="WhatsApp" />
                        Entrar em Contato
                    </a>
                </footer>
            </article>
        </>
    );
};
