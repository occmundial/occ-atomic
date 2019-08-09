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
        const { classes } = this.props;
        return (
            <div className={classes.navigation}>
                <SearchField onChange={this.onSearch} onClear={this.clearField} value={term} />
                    <SlideDown title="Subatomic" expanded>
                        <ul className={classes.ul}>
                            <li className={classes.li}>
                                <a href="#Colors" className={classes.a}>Colors</a>
                            </li>
                            <li className={classes.li}>
                            <a href="#Icons" className={classes.a}>Icons</a>
                            </li>
                            {/* <li className={classes.li}>
                                <a href="#Fonts" className={classes.a}>Fonts</a>
                            </li>
                            <li className={classes.li}>
                                <a href="#Grid" className={classes.a}>Grid</a>
                            </li>
                            <li className={classes.li}>
                                <a href="#Shadows" className={classes.a}>Shadows</a>
                            </li> */}
                        </ul>
                    </SlideDown>
                    {
                        componentOrdering.map(group => {
                            return (
                                <SlideDown key={group.name} title={group.name} expanded>
                                    <ul className={classes.ul}>
                                    {group.components.map(component => {
                                        if (this.compareSearchTerm(term, component)) {
                                                return (
                                                    <li key={component} className={classes.li}>
                                                        <a href={`#${component}`} className={classes.a}>{component}</a>
                                                    </li>
                                                );
                                            }
                                    })}
                                    </ul>
                                </SlideDown>
                            );
                        })
                    }
            </div>
        );
    }
}

Navigation.propTypes = {
    classes: PropTypes.object
};

export default Navigation;
