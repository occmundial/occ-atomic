/* Themes without Icon */
import React from 'react';
import { Tag } from '@occmundial/occ-atomic';

export default function Example1() {
    return (
        <div>
            <Tag>Default Tag</Tag>
            <Tag theme="info">Tag with info theme</Tag>
            <Tag theme="success">Tag with success theme</Tag>
            <Tag theme="warning">Tag with success theme</Tag>
            <Tag theme="error">Tag with success theme</Tag>
        </div>
    );
}