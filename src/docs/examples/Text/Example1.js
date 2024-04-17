/* Sizes */
import React from 'react';
import { Text } from '@occmundial/occ-atomic';
import ExampleTable from '../../ExampleTable';


export default function Example1() {
    return (
        <ExampleTable>
            <thead>
                <tr>
                    <th>Prop</th>
                    <th>Prop (Legacy)</th>
                </tr>
            </thead>

            <tbody>

                <tr>
                    <td><Text display>Display text</Text></td>
                    <td/>
                </tr>

                <tr>
                    <td><Text h1>H1 text</Text></td>
                    <td><Text hero>Hero text</Text></td>
                </tr>

                <tr>
                    <td><Text h2>H2 text</Text></td>
                    <td><Text headline>Headline text</Text></td>
                </tr>

                <tr>
                    <td><Text h3>H3 text</Text></td>
                    <td/>
                </tr>

                <tr>
                    <td><Text h4>H4 text</Text></td>
                    <td><Text heading>Heading text</Text></td>
                </tr>

                <tr>
                    <td><Text h5>H5 text</Text></td>
                    <td><Text subheading>Subheading text</Text></td>
                </tr>

                <tr>
                    <td><Text tagText>Tag text</Text></td>
                    <td/>
                </tr>


                <tr>
                    <td><Text bodyXLarge>BodyXLarge body</Text></td>
                    <td><Text extraLarge>Extra-large</Text></td>
                </tr>



                <tr>
                    <td><Text bodyLargeStrong>BodyLargeStrong body</Text></td>
                    <td/>
                </tr>

                <tr>
                    <td><Text bodyLarge>BodyLarge body</Text></td>
                    <td><Text large>Large body</Text></td>
                </tr>

                <tr>
                    <td><Text bodyRegularStrong>BodyRegularStrong body</Text></td>
                    <td/>
                </tr>

                <tr>
                    <td><Text bodyRegular>BodyRegular body</Text></td>
                    <td><Text standard>Standard body</Text></td>
                </tr>

                <tr>
                    <td><Text bodySmallStrong>BodySmallStrong body</Text></td>
                    <td/>
                </tr>

                <tr>
                    <td><Text bodySmall>BodySmall body</Text></td>
                    <td><Text small>Small Caption</Text></td>
                </tr>

                <tr>
                    <td><Text bodyXSmall>BodyXSmall body</Text></td>
                    <td><Text micro>Micro</Text></td>
                </tr>
            </tbody>            
        </ExampleTable>
    );
}
