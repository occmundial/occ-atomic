/* Themes with Icon big size */
import React from 'react';
import { Tag } from '@occmundial/occ-atomic';

export default function Example1() {
  return (
    <div>
      <Tag iconName="check" size="big">
        Default Tag
      </Tag>
      <Tag theme="info" iconName="check" size="big">
        Tag with info theme
      </Tag>
      <Tag theme="success" iconName="check" size="big">
        Tag with success theme
      </Tag>
      <Tag theme="warning" iconName="check" size="big">
        Tag with warning theme
      </Tag>
      <Tag theme="error" iconName="check" size="big">
        Tag with error theme
      </Tag>
      <Tag theme="link" iconName="check" size="big">
        Tag with link theme
      </Tag>
    </div>
  );
}
