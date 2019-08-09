/* Text overflow */
import React from 'react';
import { Checkbox } from '@occmundial/occ-atomic';

export default function Example4() {
    return (
        <div style={{display:'block'}}>
            <Checkbox label="Bacon ipsum dolor amet landjaeger kevin tri-tip strip steak tenderloin, jerky brisket boudin fatback corned beef ball tip buffalo. Meatball rump boudin flank doner pancetta. Venison turkey capicola fatback alcatra. Jowl pork belly brisket pastrami turkey bresaola. Doner pork chicken biltong tail." textOverflow />
        </div>
    );
}
