/* Without numbers */
import React from 'react';
import { Pager } from 'r12-common';

export default function Example2() {
    return (
        <Pager
            pageCount={5}
            hideNumbers
        />
    )
}