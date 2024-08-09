/* Spacing */
import React from 'react';
import { Placeholder } from '@occmundial/occ-atomic';
import ExampleTable from '../../ExampleTable';


export default function Example3() {
    return (
    <ExampleTable>
        <thead>
          <tr>
            <th>Top (deprecated)</th>
            <th>Bottom (deprecated)</th>
          </tr>
        </thead>
    
        <tbody>
          <tr>
            <td>
              <Placeholder textSize="h4" top="xTiny" />
            </td>
            <td>
              <Placeholder textSize="h4" bottom="xTiny" />
            </td>
          </tr>
          <tr>
            <td>
              <Placeholder textSize="h4" top="tiny" />
            </td>
            <td>
              <Placeholder textSize="h4" bottom="tiny" />
            </td>
          </tr>
          <tr>
            <td>
              <Placeholder textSize="h4" top="small" />
            </td>
            <td>
              <Placeholder textSize="h4" bottom="small" />
            </td>
          </tr>
          <tr>
            <td>
              <Placeholder textSize="h4" top="base" />
            </td>
            <td>
              <Placeholder textSize="h4" bottom="base" />
            </td>
          </tr>
          <tr>
            <td>
              <Placeholder textSize="h4" top="medium" />
            </td>
            <td>
              <Placeholder textSize="h4" bottom="medium" />
            </td>
          </tr>
          <tr>
            <td>
              <Placeholder textSize="h4" top="large" />
            </td>
            <td>
              <Placeholder textSize="h4" bottom="large" />
            </td>
          </tr>
          <tr>
            <td>
              <Placeholder textSize="h4" top="xLarge" />
            </td>
            <td>
              <Placeholder textSize="h4" bottom="xLarge" />
            </td>
          </tr>
        </tbody>
    </ExampleTable>
    );
}
