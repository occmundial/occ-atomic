import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation';
import ComponentPage from '../ComponentPage';
import componentData from '../../config/componentData';

import { Flexbox, SubHeader, Card } from '../../../build/index';

class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            route: window.location.hash.substr(1)
        };
    }
    
    componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.setState({route: window.location.hash.substr(1)})
        });
    }
    
    render() {
        const { route } = this.state;
        const { classes } = this.props;
        const component = route ? componentData.filter( component => component.name === route)[0] : componentData[0];
        
        return (
            <div>
                <SubHeader left="R12-common" fixed />
                <Flexbox className={classes.app} display="flex">
                    <Navigation components={componentData.map(component => component.name)} />
                    <Flexbox flex="1" className={classes.cardCont}><Card shadow={3}><ComponentPage component={component} /></Card></Flexbox>
                </Flexbox>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object
};

export default App;