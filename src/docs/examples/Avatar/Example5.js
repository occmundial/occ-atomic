/* Interactive avatars */
import React from 'react';
import { Avatar } from '@occmundial/occ-atomic';

export default function Example5() {
    return (
        <div>
            <Avatar onClick={() => console.log('Hey')} />
            <Avatar name="Some user" onClick={() => console.log('Hey')} />
            <Avatar photo="https://i.pravatar.cc/300" onClick={() => console.log('Hey')} />
            <Avatar onEdit={() => console.log('Hey')} />
            <Avatar name="Some user" onEdit={() => console.log('Hey')} />
            <Avatar photo="https://i.pravatar.cc/300" onEdit={() => console.log('Hey')} />
        </div>
    );
}