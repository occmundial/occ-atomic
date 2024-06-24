/* Themes without Icon */
import React from 'react';
import { Tag, colors } from '@occmundial/occ-atomic';

export default function Example1() {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <Tag>Default Tag</Tag>
            <div style={{ background:colors.grey3, display: 'inline-block', padding: '8px 4px 2px 4px', borderRadius: 4 }}><Tag theme="basic">Tag with basic theme</Tag></div>
            <Tag theme="featured">Featured with info theme</Tag>
            <Tag theme="promo">Promo with info theme</Tag>
            <Tag theme="success">Tag with success theme</Tag>
            <Tag theme="info">Tag with info theme</Tag>
            <Tag theme="warning">Tag with warning theme</Tag>
            <Tag theme="error">Tag with error theme</Tag>
            <Tag theme="link">Tag with link theme</Tag>
        </div>
    );
}