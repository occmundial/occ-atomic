/* Text overflow */
import React from 'react';
import { Radio } from '@occmundial/occ-atomic';

const options = [
    {value:1, label:'Bacon ipsum dolor amet landjaeger kevin tri-tip strip steak tenderloin, jerky brisket boudin fatback corned beef ball tip buffalo. Meatball rump boudin flank doner pancetta. Venison turkey capicola fatback alcatra. Jowl pork belly brisket pastrami turkey bresaola. Doner pork chicken biltong tail.'}
];

export default function Example4() {
    return (
        <div style={{display:'block'}}>
            <Radio options={options} textOverflow />
        </div>
    );
}
