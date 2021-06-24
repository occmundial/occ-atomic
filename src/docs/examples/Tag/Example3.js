/* Themes without Icon medium size*/
import React from 'react';
import { Tag, colors } from '@occmundial/occ-atomic';

export default function Example3() {
    return (
        <div>
            <Tag size="medium">Default Tag</Tag>
            <div style={{background:colors.grey3, display: 'inline-block'}}><Tag theme="basic" size="medium">Tag with basic theme</Tag></div>
            <Tag theme="info" size="medium">Tag with info theme</Tag>
            <Tag theme="success" size="medium">Tag with success theme</Tag>
            <Tag theme="warning" size="medium">Tag with warning theme</Tag>
            <Tag theme="error" size="medium">Tag with error theme</Tag>
            <Tag theme="link" size="medium">Tag with link theme</Tag>
        </div>
    );
}