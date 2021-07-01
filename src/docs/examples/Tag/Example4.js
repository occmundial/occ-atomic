/*Themes with Icon medium size*/
import React from 'react';
import { Tag, colors } from '@occmundial/occ-atomic';

export default function Example4() {
    return (
        <div>
            <Tag iconName="check" size="medium">Default Tag</Tag>
            <div style={{background:colors.grey3, display: 'inline-block'}}><Tag theme="basic" iconName="check" size="medium">Tag with basic theme</Tag></div>
            <Tag theme="info" iconName="check" size="medium">Tag with info theme</Tag>
            <Tag theme="success" iconName="check" size="medium">Tag with success theme</Tag>
            <Tag theme="warning" iconName="check" size="medium">Tag with warning theme</Tag>
            <Tag theme="error" iconName="check" size="medium">Tag with error theme</Tag>
            <Tag theme="link" iconName="check" size="medium">Tag with link theme</Tag>
        </div>
    );
}