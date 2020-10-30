import React, { FunctionComponent } from "react";
import { api } from "../../services/api";

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name:string;
    subject:string;
    whatsapp: string;
}
interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem:React.FunctionComponent<TeacherItemProps> = ({teacher}) => {

  function createNewConnection() {
    api.post('/connections',{
      user_id: teacher.id
    });
  }

    return (
      <article className="teacher-item">

            <header>
              {/* <img src="https://avatars1.githubusercontent.com/u/63937242?s=460&u=867f0dd9b67de44897fe8e5d28aeab1e06130fcd&v=4" alt="Hércules"/> */}
              <img src={teacher.avatar} alt={teacher.name} />
              <div>
                <strong>{teacher.name}</strong>
                <span>C{teacher.subject}</span>
              </div>
            </header>
            
            <p>
              {teacher.bio}
            </p>

            <footer>
              <p>
                Preço:
                <strong>{teacher.cost}</strong>
              </p>

              <a target="_blank" onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}`}>
                <img src={whatsappIcon} alt="WhatsApp"/>
                Entrar em Contato
              </a>

            </footer>
          </article>
    );
}

export {TeacherItem}