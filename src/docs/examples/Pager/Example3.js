/* Disabled pager */
import React, { useState } from 'react';
import { Pager } from '@occmundial/occ-atomic';

export default function Example2() {
    const [currentPage, setCurrentPage] = useState(1);
    return (
        <Pager
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            pageCount={5}
            disabled
        />
    );
}