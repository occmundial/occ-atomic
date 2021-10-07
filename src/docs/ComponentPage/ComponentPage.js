import React from 'react';
import PropTypes from 'prop-types';
import Example from '../Example';
import Props from '../Props';
import { Text, Card, Flexbox, Button } from '@occmundial/occ-atomic';

const ComponentPage = ({ classes, component }) => {
    const { name, description, props, examples } = component;
    const descArray = description.split('\r');

    return (
        <div className={classes.page}>
            <Card shadow={3}>
                <Flexbox display="flex" justifyContent="between">
                    <Text tag="h1" heading>{name}</Text>
                    <div>
                        <Button size="sm" theme="tertiary" target="_blank" href={`https://github.com/occmundial/occ-atomic/tree/master/lib/${name}`}>Github</Button>
                    </div>
                </Flexbox>
                {descArray.map((desc, index) => (
                    <p key={index} className={classes.desc}>{desc}</p>
                ))}
            </Card>



            <Text tag="h2" subheading topSmall bottomSmall>Example{examples.length > 1 && "s"}</Text>
            {
                examples.length > 0 ?
                    examples.map((example) => <Example key={example.code} example={example} componentName={name} />) : <p className={classes.desc}>No examples exist.</p>
            }
            <Card shadow={3} style={{ marginTop: 30 }}>
                <Text tag="h2" subheading>Props</Text>
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
