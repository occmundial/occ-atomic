/* NavTab with center */
import React from 'react';
import { NavTab } from '@occmundial/occ-atomic';

class Example2 extends React.Component {

    render() {
        const left = [
            {
                key:1,
                type: 'icon',
                iconName: 'bars'
            }
        ];
        const right = [
            {
                key:1,
                type:'icon',
                iconName:'messages'
            }
        ];
        const center = [
            {
                key:1,
                type:'icon',
                iconName:'panel'
            },
            {
                key:2,
                type:'icon',
                iconName:'search'
            },
            {
                key:3,
                type:'icon',
                iconName:'user'
            }
        ];
        return (
            <div>
                <NavTab blue left={left} center={center} right={right} />
                <NavTab left={left} center={center} right={right} />
            </div>
        );
    }
}

export default Example2;
