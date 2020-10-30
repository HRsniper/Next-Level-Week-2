import React, { useContext } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import { AuthContext } from "./contexts/AuthContext";

import { Landing } from "./pages/Landing";
import { TeacherList } from "./pages/TeacherList";
import { TeacherForm } from "./pages/TeacherForm";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { RegisterSuccess } from "./pages/RegisterSuccess";
import { LostPassword } from "./pages/LostPassword";
import { LostPasswordSuccess } from "./pages/LostPasswordSuccess";
import { ScheduleSuccess } from "./pages/ScheduleSuccess";
import { NotFound } from "./pages/NotFound";

import { Loading } from "./components/Loading";

export const Routes: React.FC = () => {
    const { loading, authenticated } = useContext(AuthContext);
    
    if (loading) {
        return <Loading />
    }


    return authenticated ? (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/study" component={TeacherList} />
                <Route path="/give-classes" component={TeacherForm} />
                <Route path="/schedule-success" component={ScheduleSuccess} />
                {/* <Route path="*" component={NotFound} /> vai para pagina not found mais nao redireciona */}
                <Route path="/not-found" component={NotFound} />
                <Redirect to="/not-found" />
            </Switch>
        </BrowserRouter>
    ) : (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/lost-password" component={LostPassword} />
                <Route path="/lost-pass-success" component={LostPasswordSuccess} />
                <Route path="/register" component={Register} />
                <Route path="/register-success" component={RegisterSuccess} />
                <Route path="/not-found" component={NotFound} />
                <Redirect to="/not-found" />
            </Switch>
        </BrowserRouter>
    );
};
