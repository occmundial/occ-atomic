import React from 'react';
import PropTypes from 'prop-types';
import { Title, Card, fonts, Avatar, Flexbox } from '@occmundial/occ-atomic';

const Fonts = ({ classes }) => {
    return (
        <div className={classes.page}>
            <Card shadow={3}>
                <Title h={1}>Fonts</Title>
                <p>The library works with a stablished set of font families. One usually applied to headers and titles, and the other for text in general.</p>
                <p>The recomended colors and font sizes for headers and titles are determined on the Title component.</p>
                <p>For paragraph there's no predefined usage. Usually the color is #242424 and the font size goes around 13 to 16 px.</p>
            </Card>
            <Card shadow={3} style={{marginTop:30}}>
                <h1 style={{fontFamily:fonts.title, fontWeight:'800', color:'#666666'}}>Nunito Sans Extrabold</h1>
                <h1 style={{fontFamily:fonts.title, fontWeight:'700', color:'#666666'}}>Nunito Sans Bold</h1>
                <h1 style={{fontFamily:fonts.title, fontWeight:'600', color:'#666666'}}>Nunito Sans Semibold</h1>
                <h1 style={{fontFamily:fonts.title, fontWeight:'400', color:'#666666'}}>Nunito Sans Regular</h1>
                <h1 style={{fontFamily:fonts.title, fontWeight:'300', color:'#666666'}}>Nunito Sans Light</h1>
                <h3 style={{fontFamily:fonts.body, fontWeight:'700', color:'#666666'}}>Open Sans Bold</h3>
                <h3 style={{fontFamily:fonts.body, fontWeight:'600', color:'#666666'}}>Open Sans Semibold</h3>
                <h3 style={{fontFamily:fonts.body, fontWeight:'400', color:'#666666'}}>Open Sans Regular</h3>
                <h3 style={{fontFamily:fonts.body, fontWeight:'300', color:'#666666'}}>Open Sans Light</h3>
            </Card>
        </div>
    )
};

Fonts.propTypes = {
    classes: PropTypes.object,
};

export default Fonts;