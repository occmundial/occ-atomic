/* Default Info Tip */
import React from 'react';
import { Tip } from '@occmundial/occ-atomic';

export default function Example1() {
    return (
        <Tip
          text="Ahora puedes llegar a más candidatos cuando busquen por ubicación. "
          bold="Escribe el nombre de la Colonia o la Delegación/Ciudad o el Estado y escoge una de las opciones que se presentan."
          complement=" Tu vacante aparecerá en más búsquedas y con mayor relevancia por la ubicación de los candidatos."
        />
    );
}