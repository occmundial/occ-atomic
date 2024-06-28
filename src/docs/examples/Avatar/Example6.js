/* Disabled avatars */
import React from 'react';
import { Avatar } from '@occmundial/occ-atomic';

export default function Example5() {
    return (
        <div>
            <Avatar onClick={() => console.log('Hey')} disabled />
            <Avatar name="Some user" onClick={() => console.log('Hey')} disabled />
            <Avatar photo="https://i.pravatar.cc/300" onClick={() => console.log('Hey')} disabled />
            
        </div>
    );
}