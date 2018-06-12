/* Simple pager */
import React from 'react';
import { Pager } from 'r12-common';

export default function Example1() {
    return (
        <Pager
            pageCount={30}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
        />
    )
}