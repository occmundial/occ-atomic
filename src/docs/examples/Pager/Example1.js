/* Simple pager */
import React, { useState } from 'react';
import { Pager } from '@occmundial/occ-atomic';

export default function Example1() {
    const [currentPage, setCurrentPage] = useState(1);
    return (
        <Pager
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            pageCount={30}
            centerPages={3}
            marginPages={2}
        />
    );
}