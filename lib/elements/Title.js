import React from 'react';
import injectSheet from 'react-jss';

import colors from '../subatomic/colors';
import fonts from '../subatomic/fonts';

const styles = {
    title: {
        fontFamily:fonts.title,
        color:colors.title,
        fontWeight:'600',
        marginTop:'20px',
        marginBottom:'15px',
    },
    h1: {
        fontSize:'22px'
    },
    h2: {
        fontSize:'20px',
    },
    h3: {
        fontSize:'18px',
    },
    h4: {
        fontSize:'15px'
    }
}

class Title extends React.Component {
    
    render() {
        const { classes, children, h } = this.props;
        let Heading;
        if (h && h<=6 && h>=1)
            Heading = `h${h}`;
        else
            Heading = 'h1';
        return (
            <Heading className={`${classes.title} ${classes[Heading]}`}>
                {children}
            </Heading>
        )
    }
}

export default injectSheet(styles)(Title);