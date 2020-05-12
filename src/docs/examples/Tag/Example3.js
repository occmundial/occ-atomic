/* Themes without Icon medium size */
import React from 'react';
import { Tag } from '@occmundial/occ-atomic';

export default function Example1() {
  return (
    <div>
      <Tag size="medium">Default Tag</Tag>
      <Tag theme="info" size="medium">Tag with info theme</Tag>
      <Tag theme="success" size="medium">Tag with success theme</Tag>
      <Tag theme="warning" size="medium">Tag with warning theme</Tag>
      <Tag theme="error" size="medium">Tag with error theme</Tag>
      <Tag theme="link" size="medium">Tag with link theme</Tag>
    </div>
  );
}