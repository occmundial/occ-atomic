/* Return the page number on change */
import React from 'react';
import { Pager } from '@occmundial/occ-atomic';

export default function Example2() {
    return (
        <Pager
            pageCount={5}
            onPageChange={(page) => {console.log(page);}}
        />
    )
}