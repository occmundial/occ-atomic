import React from 'react';
import PropTypes from 'prop-types';
import { Title, Card, Icon, colors, icons, Avatar, Flexbox } from '@occmundial/occ-atomic';

const reduceIcons = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const iconKeys = Object.keys(icons);

const Icons = ({ classes }) => {
    console.log(iconKeys);
    return (
        <div className={classes.page}>
            <Card shadow={3}>
                <Title h={1}>Icons</Title>
                <p>The easiest way to implement the icons of the library is using the Icon component.</p>
                <p>However, you can access directly to the icons library and implement them.</p>
                <p>Here's the process the library follows to give you an icon:</p>
                <ul>
                    <li>You choose an icon name</li>
                    <li>The library accesses to the object of the icon, having values for width, height, display, and a function called icon.</li>
                    <li>This icon function contains the svg of the icon, but can receive any color and inject it to its code.</li>
                    <li>The colors must be inside an array, so the icon can inject the right color in the right place (in case of icons with more than one color).</li>
                    <li>This icon function then returns the svg with the right colors, and then it must be passed to the base function.</li>
                    <li>The base function transforms the svg to base64 and returns a background css property with the svg and other properties like repetition and position.</li>
                </ul>
            </Card>
            <Card shadow={3} style={{marginTop:30}}>
                {iconKeys.map(icon => {
                    if (icon != "base" && icon != "testing") {
                        return (
                            <div key={icon} className={classes.iconBlock}>
                                <Icon iconName={icon} colors={[colors.black, colors.pink, colors.white]}  />
                            </div>
                        );
                    }
                    return null;
                })}
                
            </Card>
        </div>
    )
};

Icons.propTypes = {
    classes: PropTypes.object,
};

export default Icons;