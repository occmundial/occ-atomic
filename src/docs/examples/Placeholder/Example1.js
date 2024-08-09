/* Placeholder matching the text sizes */
import React from 'react';
import { Placeholder } from '@occmundial/occ-atomic';
import ExampleTable from '../../ExampleTable';
import { Text } from '@occmundial/occ-atomic';

export default function Example1() {
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
                <td><Text display>Display text</Text></td>
                <td>
                <Placeholder textSize="display" />
                </td>
            </tr>
            <tr>
                <td><Text h1>H1 text</Text></td>
                <td>
                    <Placeholder textSize="hero" />
                </td>
            </tr>
            <tr>
                <td><Text h2>H2 text</Text></td>
                <td>
                    <Placeholder textSize="h2" />
                </td>
            </tr>
            <tr>
                <td><Text h3>H3 text</Text></td>
                <td>
                    <Placeholder textSize="h3" />
                </td>
            </tr>
            <tr>
                <td><Text h4>H4 text</Text></td>
                <td>
                    <Placeholder textSize="h4" />
                </td>
            </tr>
            <tr>
                <td><Text h5>H5 text</Text></td>
                <td>
                    <Placeholder textSize="subheading" />
                </td>
            </tr>
            <tr>
                <td><Text tagText>Tag text</Text></td>
                <td>
                    <Placeholder textSize="tag" />
                </td>
            </tr>
            <tr>
                <td><Text bodyXLarge>BodyXLarge body</Text></td>
                <td>
                    <Placeholder textSize="bodyXLarge" />
                </td>
            </tr>
            <tr>
                <td><Text bodyLargeStrong>BodyLargeStrong body</Text></td>
                <td>
                    <Placeholder textSize="bodyLargeStrong" />
                </td>
            </tr>
            <tr>
                <td><Text bodyLarge>BodyLarge body</Text></td>
                <td>
                    <Placeholder textSize="bodyLarge" />
                </td>
            </tr>
            <tr>
                <td><Text bodyRegularStrong>BodyRegularStrong body</Text></td>
                <td>
                    <Placeholder textSize="bodyRegularStrong" />
                </td>
            </tr>
            <tr>
                <td><Text bodyRegular>BodyRegular body</Text></td>
                <td>
                    <Placeholder textSize="standard" />
                </td>
            </tr>
            <tr>
                <td><Text bodySmallStrong>BodySmallStrong body</Text></td>
                <td>
                    <Placeholder textSize="bodySmallStrong" />
                </td>
            </tr>
            <tr>
                <td><Text bodySmall>BodySmall body</Text></td>
                <td>
                    <Placeholder textSize="small" />
                </td>
            </tr>
            <tr>
                <td><Text bodyXSmall>BodyXSmall body</Text></td>
                <td>
                    <Placeholder textSize="micro" />
                </td>
            </tr>
            </tbody>
        </ExampleTable>
    );
}
