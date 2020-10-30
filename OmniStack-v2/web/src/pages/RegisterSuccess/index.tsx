import React from "react";

import { SuccessPage } from "../../components/SuccessPage";

export function RegisterSuccess() {
    return (
        <>
            <SuccessPage
                title="Cadastro Concluído"
                description="Agora você faz parte da plataforma. Tenha uma ótima experiência."
                button="Fazer Login"
            />
        </>
    );
}
