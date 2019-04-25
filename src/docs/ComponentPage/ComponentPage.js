import React from 'react';
import PropTypes from 'prop-types';
import Example from '../Example';
import Props from '../Props';
import { Title, Card } from '@occmundial/occ-atomic';

const ComponentPage = ({ classes, component }) => {
    const { name, description, props, examples } = component;
    const descArray = description.split('\r');
    return (
        <div className={classes.page}>
            <Card shadow={3}>
                <Title h={1}>{name} <a className={classes.gitlink} target="_blank" href={`https://github.com/occmundial/occ-atomic/tree/master/lib/${name}`}>Check component on Github</a></Title>
                {descArray.map((desc, index) => (
                    <p key={index} className={classes.desc}>{desc}</p>
                ))}
            </Card>



            <Title h={2}>Example{examples.length > 1 && "s"}</Title>
            {
                examples.length > 0 ?
                examples.map((example, index) => <Example key={example.code} example={example} componentName={name} /> ) : <p className={classes.desc}>No examples exist.</p>
            }
            <Card shadow={3} style={{marginTop:30}}>
                <Title h={2}>Props</Title>
                {
                    props ?
                    <Props props={props} /> : 'This component accepts no props.'
                }
            </Card>
        </div>
    );
};

ComponentPage.propTypes = {
    classes: PropTypes.object,
    component: PropTypes.object.isRequired
};

export default ComponentPage;
