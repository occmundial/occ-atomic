/* Themes with Icon */
import React from 'react';
import { Tag, colors } from '@occmundial/occ-atomic';

export default function Example2() {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <Tag iconName="check">Default Tag</Tag>
            <div style={{ background:colors.grey3, display: 'inline-block', padding: '8px 4px 2px 4px', borderRadius: 4 }}><Tag theme="basic" iconName="check">Tag with basic theme</Tag></div>
            <Tag theme="featured" iconName="check">Featured with info theme</Tag>
            <Tag theme="promo" iconName="check">Promo with info theme</Tag>
            <Tag theme="info" iconName="check">Tag with info theme</Tag>
            <Tag theme="success" iconName="check">Tag with success theme</Tag>
            <Tag theme="warning" iconName="check">Tag with warning theme</Tag>
            <Tag theme="error" iconName="check">Tag with error theme</Tag>
            <Tag theme="link" iconName="check">Tag with link theme</Tag>
        </div>
    );
}