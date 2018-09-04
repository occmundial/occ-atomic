import React from 'react';
import PropTypes from 'prop-types';
import { Title, Card, colors, Avatar, Flexbox } from '@occmundial/occ-atomic';

const colorKeys = Object.keys(colors);

const Colors = ({ classes }) => {
    return (
        <div className={classes.page}>
            <Card shadow={3}>
                <Title h={1}>Colors</Title>
                <p>OCC-Atomic includes a library of colors. The OCC styleguide is strongly based on this color palette.</p>
                <p>To use them, you just need to import the colors object and access to the desired color.</p>
            </Card>
            <Card shadow={3} style={{marginTop:30}}>
                {colorKeys.map(color => (
                    <Flexbox key={color} display="inline-flex" className={classes.colorBlock}>
                        <Avatar style={{background:colors[color], border:'1px solid #ddd'}} />
                        <Flexbox display="flex" direction="col" justifyContent="center">
                            <Title h={4} style={{margin:'3px 0'}}>{color}</Title>
                            <Title h={6} style={{margin:'2px 0'}}>{colors[color]}</Title>
                        </Flexbox>
                    </Flexbox>
                ))}
            </Card>
        </div>
    );
};

Colors.propTypes = {
    classes: PropTypes.object,
};

export default Colors;