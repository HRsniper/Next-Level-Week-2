import React from "react";

import { SuccessPage } from "../../components/SuccessPage";

export function NotFound() {
    return (
        <>
            <SuccessPage
                title="Pagina não Encontrada"
                description="Vá para uma pagina valida"
                button="Fazer Login"
            />
        </>
    );
}
