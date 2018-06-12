import React from 'react';
import PropTypes from 'prop-types';
import SearchField from '../SearchField';
import componentOrdering from '../../config/componentOrdering';
import { SlideDown } from '@occmundial/occ-atomic';

class Navigation extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
        this.onSearch = this.onSearch.bind(this);
        this.clearField = this.clearField.bind(this);
    }
    
    onSearch(value) {
        this.setState({
            term: value
        });
    }
    
    clearField() {
        this.setState({
            term: ''
        });
    }
    
    compareSearchTerm(term, name) {
        return name.toLowerCase().indexOf(term.toLowerCase().trim()) > -1;
    }
    
    render() {
        const { term } = this.state;
        const { classes, components } = this.props;
        return (
            <div className={classes.navigation}>
                <SearchField onChange={this.onSearch} onClear={this.clearField} />
                <ul className={classes.ul}>
                    {
                        componentOrdering.map(group => {
                            return (
                                <SlideDown key={group.name} title={group.name} expanded>
                                    {group.components.map(component => {
                                        if (this.compareSearchTerm(term, component)) {
                                                return (
                                                    <li key={component} className={classes.li}>
                                                        <a href={`#${component}`} className={classes.a}>{component}</a>
                                                    </li>
                                                );
                                            }
                                    })}
                                </SlideDown>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

Navigation.propTypes = {
    classes: PropTypes.object,
    components: PropTypes.array.isRequired
};

export default Navigation;