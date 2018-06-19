import React from 'react';
import PropTypes from 'prop-types';
import { Title, Card } from '@occmundial/occ-atomic';
import IndexPage from '../IndexPage';
// import Colors from '../SubatomicPage/Colors';
// import Fonts from '../SubatomicPage/Fonts';
// import Grid from '../SubatomicPage/Grid';
// import Icons from '../SubatomicPage/Icons';
// import Shadows from '../SubatomicPage/Shadows';
import ErrorPage from '../ErrorPage';

const CustomPage = ({ classes, route }) => {
    let Component;
    switch(route) {
        case '':
            Component = <IndexPage />;
            break;
        // case 'Colors':
        //     Component = <Colors />;
        //     break;
        // case 'Fonts':
        //     Component = <Fonts />;
        //     break;
        // case 'Grid':
        //     Component = <Grid />;
        //     break;
        // case 'Icons':
        //     Component = <Icons />;
        //     break;
        // case 'Shadows':
        //     Component = <Shadows />;
        //     break;
        default:
            Component = <ErrorPage />;
    }
    return (
        <div>
            {Component}
        </div>
    );
};

CustomPage.propTypes = {
    classes: PropTypes.object,
    route: PropTypes.string.isRequired
};

export default CustomPage;