import React from 'react';
import PropTypes from 'prop-types';
import Example from '../Example';
import Props from '../Props';
import Title from '../../../build/elements/Title';

const ComponentPage = ({ classes, component }) => {
    const { name, description, props, examples } = component;
    
    return (
        <div className={classes.page}>
            <Title h={1}>{name}</Title>
            <p className={classes.desc}>{description}</p>
            
            <h3>Example{examples.length > 1 && "s"}</h3>
            {
                examples.length > 0 ?
                examples.map(example => <Example key={example.code} example={example} componentName={name} /> ) : 'No examples exist.'
            }
            <h3>Props</h3>
            {
                props ?
                <Props props={props} /> : 'This component accepts no props.'
            }
        </div>
    )
};

ComponentPage.propTypes = {
    classes: PropTypes.object,
    component: PropTypes.object.isRequired
};

export default ComponentPage;