import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '@occmundial/occ-atomic';

class SearchField extends React.Component{
    render() {
        const { onChange, onClear, value } = this.props;
        return (
            <div>
                <Input
                    placeholder="Component"
                    onChange={onChange}
                    clear
                    onClear={onClear}
                    iconName="search"
                    valueProp={value}
                />
            </div>
        );
    }
}

SearchField.propTypes = {
    onChange: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
    value: PropTypes.string
};

export default SearchField;