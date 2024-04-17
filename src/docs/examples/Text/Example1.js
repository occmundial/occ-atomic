/* Sizes */
import React from 'react';
import { Text } from '@occmundial/occ-atomic';

export default function Example1() {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ flex: 1 }}>
                <Text h1>H1 text</Text>
                <Text h2>H2 text</Text>
                <Text h3>H3 text</Text>
                <Text h4>H4 text</Text>
                <Text h5>H5 text</Text>
                <Text tagText>Tag text</Text>
                <Text bodyXLarge>BodyXLarge body</Text>
                <Text bodyLargeStrong>BodyLargeStrong body</Text>
                <Text bodyLarge>BodyLarge body</Text>
                <Text bodyRegularStrong>BodyRegularStrong body</Text>
                <Text bodyRegular>BodyRegular body</Text>
                <Text bodySmallStrong>BodySmallStrong body</Text>
                <Text bodySmall>BodySmall body</Text>
                <Text bodyXSmall>BodyXSmall body</Text>
            </div>


            <div style={{ flex: 1 }}>
                {/* Legacy props */}
                <Text hero>Hero text</Text>
                <Text headline>Headline text</Text>
                <Text heading>Heading text</Text>
                <Text subheading>Subheading text</Text>
                <Text extraLarge>Extra-large</Text>
                <Text large>Large body</Text>
                <Text standard>Standard body</Text>
                <Text small>Small Caption</Text>
                <Text micro>Micro</Text>
            </div>

        </div>

    );
}
