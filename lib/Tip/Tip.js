import React from 'react';
import PropTypes from 'prop-types';
import Flexbox from '../Flexbox';
import Text from '../Text';
import Icon from '../Icon';

/** Tip component */
class Tip extends React.Component {
    render() {
        const { id, style, className, classes, text, bold, complement } = this.props;
        return (
            <div
                id={id}
                className={`${className ? ` ${className}` : ''}`}
                style={style}
            >
            <Flexbox
              display="flex"
              justifyContent="start"
              className={classes.container}
            >
              <div>
                <Icon iconName="bulb"/>
              </div>
              <div className={classes.leftMargin}>
                <Text standard info>
                  {text}
                  <strong>
                    {bold}
                  </strong>
                  {complement}
                </Text>
              </div>
            </Flexbox>
            </div>
        );
    }
}

Tip.defaultProps = {
};

Tip.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    /** Text string */
    text: PropTypes.string.isRequired,
    /** bold string */
    bold: PropTypes.string,
    /** complement string */
    complement: PropTypes.string,
};

export default Tip;
