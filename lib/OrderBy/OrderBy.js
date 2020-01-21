import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';
import Icon from '../Icon';
import Flexbox from '../Flexbox';
import Card from '../Card';
import colors from '../subatomic/colors';

/** The OrderBy component shows a label and a dropdown with the values to order a set of items. You have to do that ordering by receiving the OrderBy value with an onChange function. */
class OrderBy extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            display: false
        };
        this.onChange = this.onChange.bind(this);
        this.toggleCard = this.toggleCard.bind(this);
        this.hideCard = this.hideCard.bind(this);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.hideCard);
    }

    toggleCard(e) {
        const { display } = this.state;
        e.stopPropagation();
        if (!display) {
            window.addEventListener('click', this.hideCard);
        }
        this.setState({
            display: !display
        });
    }

    hideCard() {
        this.setState({
            display: false
        });
        window.removeEventListener('click', this.hideCard);
    }

    onChange(value) {
        const { onChange } = this.props;
        if (onChange) onChange(value);
        this.hideCard();
    }

    stopPropagation(e) {
        e.stopPropagation();
    }

    render() {
        const { display } = this.state;
        const { classes, text, options, selected, id, className, style, iconName='arrowDown', hideSelectedText } = this.props;
        const selectedOption = options.filter(option => option.value == selected);
        const selectedText = selectedOption.length && selectedOption[0].text ? selectedOption[0].text : '';
        return (
            <div className={`${classes.wrap}${className ? ` ${className}` : ''}`} id={id} style={style}>
                <div className={classes.button} onClick={this.toggleCard}>
                    <Flexbox display="inline-flex">
                        <Text small mid>{text} {hideSelectedText ? '': selectedText}</Text>
                        <Icon iconName={iconName} colors={[colors.grey600]} className={classes.icon} />
                    </Flexbox>
                </div>
                <div onClick={this.stopPropagation} className={`${classes.cardWrap}${display ? ` ${classes.show}` : ''}`}>
                    <Card className={classes.card}>
                        {options.map(option => (
                            <div className={classes.option} key={option.value} onClick={() => { this.onChange(option.value); }}>
                                <Text className={option.value === selected ? classes.link: ''} value={option.value}>{option.text}</Text>
                            </div>
                        ))}
                    </Card>
                </div>
            </div>
        );
    }
}

OrderBy.propTypes = {
    classes: PropTypes.object,
    /** Text to be displayed on the left. */
    text: PropTypes.string,
    /** Array with all the options to show in the dropdown. */
    options: PropTypes.array.isRequired,
    /** Set a default value. */
    selected: PropTypes.node,
    /** Function to call when the value of the dropdown changes. */
    onChange: PropTypes.func,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    iconName: PropTypes.string,
    hideSelectedText: PropTypes.bool
};

export default OrderBy;
