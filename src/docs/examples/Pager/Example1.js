/* Simple pager */
import React from 'react';
import { Pager } from '@occmundial/occ-atomic';

export default function Example1() {
    return (
        <Pager
            pageCount={30}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
        />
    );
}