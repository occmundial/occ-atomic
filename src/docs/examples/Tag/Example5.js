/* Themes without Icon big size */
import React from 'react';
import { Tag, colors } from '@occmundial/occ-atomic';

export default function Example5() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
      <Tag size="big">Default Tag</Tag>
      <div style={{ background:colors.grey3, display: 'inline-block', padding: '8px 4px 2px 4px', borderRadius: 4 }}>
        <Tag theme="basic" size="big">
          Tag with basic theme
        </Tag>
      </div>
      <Tag theme="featured" size="big">
        Featured with info theme
      </Tag>
      <Tag theme="promo" size="big">
        Promo with info theme
      </Tag>
      <Tag theme="info" size="big">
        Tag with info theme
      </Tag>
      <Tag theme="success" size="big">
        Tag with success theme
      </Tag>
      <Tag theme="warning" size="big">
        Tag with warning theme
      </Tag>
      <Tag theme="error" size="big">
        Tag with error theme
      </Tag>
      <Tag theme="link" size="big">
        Tag with link theme
      </Tag>
    </div>
  );
}
