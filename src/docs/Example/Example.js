import React from 'react';
import PropTypes from 'prop-types';
import CodeExample from '../CodeExample';
import { SlideDown, Card } from '@occmundial/occ-atomic';

class Example extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { showCode: false };
        this.toggleCode = this.toggleCode.bind(this);
    }
    
    toggleCode(event) {
        event.preventDefault();
        this.setState(prevState => {
            return { showCode: !prevState.showCode };
        });
    }
    
    sanitizeName(code) {
        return code.substr(0, code.indexOf('\r')).replace(/[\/*]/g, '').trim();
    }
    
    render() {
        const { showCode } = this.state;
        const { classes, expanded } = this.props;
        const { code, description, name } = this.props.example;
        const ExampleComponent = require(`../examples/${this.props.componentName}/${name}`).default;
        const title = this.sanitizeName(code);
        return (
            <div className={classes.example}>
                { description && <h4>{description}</h4> }
                <SlideDown title={title} expanded={expanded}>
                    <Card shadow={3}>
                        <ExampleComponent />
                        <p>
                            <a href="#" className={classes.toggleCode} onClick={this.toggleCode}>
                                {showCode ? "Hide" : "Show"} Code
                            </a>
                        </p>
                        {showCode && <CodeExample>{code}</CodeExample>}
                    </Card>
                </SlideDown>
            </div>
        )
    }
}

Example.propTypes = {
    classes: PropTypes.object,
    example: PropTypes.object.isRequired,
    componentName: PropTypes.string.isRequired
};

export default Example;