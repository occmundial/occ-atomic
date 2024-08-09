/* Themes */
import React from 'react';
import { Placeholder } from '@occmundial/occ-atomic';
import ExampleTable from '../../ExampleTable';

export default function Example5() {
    return (
      <ExampleTable>
        <thead>
          <tr>
            <th>Text size</th>
            <th>Placeholder</th>
          </tr>
        </thead>
      
        <tbody>
          <tr>
            <td>
              <Placeholder textSize="h1" />
            </td>
            <td style={{ background: 'black' }}>
              <Placeholder textSize="h1" theme="dark" />
            </td>
          </tr>
        </tbody>
      </ExampleTable>
    );
}
