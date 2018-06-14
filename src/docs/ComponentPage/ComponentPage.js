import React from 'react';
import PropTypes from 'prop-types';
import Example from '../Example';
import Props from '../Props';
import { Title } from '@occmundial/occ-atomic';

const ComponentPage = ({ classes, component }) => {
    const { name, description, props, examples } = component;
    const descArray = description.split('\r');
    return (
        <div className={classes.page}>
            <Title h={1}>{name}</Title>
            {descArray.map((desc, index) => (
                <p key={index} className={classes.desc}>{desc}</p>
            ))}
            
            
            <Title h={2}>Example{examples.length > 1 && "s"}</Title>
            {
                examples.length > 0 ?
                examples.map((example, index) => <Example key={example.code} example={example} componentName={name} expanded={index == 0} /> ) : <p className={classes.desc}>No examples exist.</p>
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