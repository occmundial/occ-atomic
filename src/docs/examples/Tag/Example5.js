/* Themes without Icon big size */
import React from 'react';
import { Tag } from '@occmundial/occ-atomic';

export default function Example1() {
  return (
    <div>
      <Tag size="big">Default Tag</Tag>
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
