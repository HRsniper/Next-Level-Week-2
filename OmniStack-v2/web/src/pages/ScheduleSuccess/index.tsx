import React from "react";

import { SuccessPage } from "../../components/SuccessPage";

export function ScheduleSuccess() {
    return (
        <>
            <SuccessPage
                title="Aula Cadastrada!"
                description="Tudo certo, seu cadastro está na nossa lista de professores. Agora é só ficar de olho no seu WhatsApp."
                button="Fazer Login"
            />
        </>
    );
}
