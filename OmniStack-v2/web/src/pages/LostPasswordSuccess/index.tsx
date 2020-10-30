import React from "react";

import { SuccessPage } from "../../components/SuccessPage";

export function LostPasswordSuccess() {
    return (
        <>
            <SuccessPage
                title="Redefinição enviada!"
                description="Boa, agora é só checar o e-mail que foi enviado para você redefinir sua senha e aproveitar os estudos."
                button="Fazer Login"
            />
        </>
    );
}
