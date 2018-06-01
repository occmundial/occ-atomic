import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'r12-common';

class SearchField extends React.Component{
    render() {
        const { onChange, onClear } = this.props;
        return (
            <div>
                <Input
                    placeholder="Component"
                    onChange={onChange}
                    clear
                    onClear={onClear}
                    iconName="search"
                />
            </div>
        );
    }
}

SearchField.propTypes = {
    onChange: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired
};

export default SearchField;