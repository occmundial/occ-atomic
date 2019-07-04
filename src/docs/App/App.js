import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation';
import ComponentPage from '../ComponentPage';
import CustomPage from '../CustomPage';
import componentData from '../../config/componentData';

import { Flexbox, NavTab, Icon, Text } from '@occmundial/occ-atomic';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            route: window.location.hash.substr(1)
        };
    }

    componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.setState({route: window.location.hash.substr(1)});
        });
    }

    render() {
        const { route } = this.state;
        const { classes } = this.props;
        const component = route ? componentData.filter( component => component.name === route)[0] : undefined;

        return (
            <div>
                <NavTab
                    left={[
                        {
                            key: 0,
                            type: 'custom',
                            custom: (
                                <a href="./" className={classes.logo}>
                                    <Flexbox display="flex" alignItems="center">
                                        <Icon iconName="occatomic" width={45} height={45} style={{marginRight:10}} /> <Text white subheading>OCC-Atomic</Text>
                                    </Flexbox>
                                </a>
                            )
                        }
                    ]}
                    right={[
                        {
                            key: 0,
                            type: 'link',
                            link: './playroom/',
                            text: 'Probar en Playroom'
                        },
                        {
                            key: 1,
                            type: 'custom',
                            custom: (
                                <div className={classes.githubBtn}>
                                    <a className="github-button" href="https://github.com/occmundial/occ-atomic" data-size="large" data-show-count="true" aria-label="Watch occmundial/occ-atomic on GitHub">View on Github</a>
                                </div>
                            )
                        }
                    ]}
                    blue
                    fixed
                    hideOnScroll
                    zIndex={1000}
                />
                <Flexbox className={classes.app} display="flex">
                    <Navigation components={componentData.map(component => component.name)} />
                    <Flexbox flex="1" className={classes.cardCont}>
                        {component ? <ComponentPage component={component} /> : <CustomPage route={route} />}
                    </Flexbox>
                </Flexbox>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object
};

export default App;
