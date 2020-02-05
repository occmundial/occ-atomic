/* Themes with Icon */
import React from 'react';
import { Tag } from '@occmundial/occ-atomic';

export default function Example1() {
    return (
        <div>
            <Tag iconName="check">Default Tag</Tag>
            <Tag theme="info" iconName="check">Tag with info theme</Tag>
            <Tag theme="success" iconName="check">Tag with success theme</Tag>
            <Tag theme="warning" iconName="check">Tag with warning theme</Tag>
            <Tag theme="error" iconName="check">Tag with error theme</Tag>
            <Tag theme="link" iconName="check">Tag with link theme</Tag>
        </div>
    );
}