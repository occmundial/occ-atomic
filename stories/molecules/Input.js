import React from 'react';
import injectSheet from 'react-jss';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react';
import { Container, Row, Column, Input } from '../../lib/index';

const stories = storiesOf('Input', module);
stories.addDecorator(withKnobs);

const styles = {
    s: {
        display:'inline-block',
        marginRight:'15px',
        marginBottom:'15px'
    }
};

const S = ({classes, children}) => (
    <div className={classes.s}>{children}</div>
);

const Space = injectSheet(styles)(S);

class InputWrapper extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            error: '',
            valid: false
        };
        this.onChange = this.onChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }
    
    onChange(value) {
        this.setState({
            value, error: ''
        });
    }
    
    onBlur() {
        const { value } = this.state;
        this.setState({
            error: 'Error message',
            valid: !!value.length
        });
        
    }
    
    render() {
        const { error, valid } = this.state;
        const { children, type, knobs } = this.props;
        if (type == "default") {
            return (
                <Input
                    name="default"
                    label="Label"
                    placeholder="Placeholder" />
            );
        } else if (type == "filled") {
            return (
                <Input
                    name="default"
                    label="Label"
                    placeholder="Placeholder"
                    valueProp="Filled" />
            );
        } else if (type == "clear") {
            return (
                <Input
                    name="default"
                    label="Label"
                    placeholder="Placeholder"
                    clear={true}
                    valueProp="Clear the input value" />
            );
        } else if (type == "icon") {
            return (
                <Input
                    name="default"
                    label="Label"
                    placeholder="Placeholder"
                    clear={true}
                    iconName="search" />
            );
        } else if (type == "autofocus") {
            return (
                <Input
                    name="default"
                    label="Label"
                    placeholder="Placeholder"
                    autoFocus />
            );
        } else if (type == "selectonfocus") {
            return (
                <Input
                    name="default"
                    label="Label"
                    placeholder="Placeholder"
                    selectOnFocus
                    valueProp="Select the input value" />
            );
        } else if (type == "counter") {
            return (
                <Input
                    name="default"
                    label="Label"
                    placeholder="Placeholder"
                    maxLength={60}
                    counter />
            );
        } else if (type == "error") {
            return (
                <Input
                    name="default"
                    label="Label"
                    placeholder="Placeholder"
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                    error={error}
                />
            );
        } else if (type == "valid") {
            return (
                <Input
                    name="default"
                    label="Label"
                    placeholder="Placeholder"
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                    valid={valid}
                />
            );
        } else if (type == "animation") {
            return (
                <div>
                    <Input
                        name="default"
                        placeholder="Placeholder"
                    />
                </div>
            );
        } else if (type == "animationicon") {
            return (
                <div>
                    <Input
                        name="default"
                        placeholder="Placeholder"
                        iconName="search"
                    />
                </div>
            );
        } else if (type == "disabled") {
            return (
                <div>
                    <Input
                        name="default"
                        label="Label"
                        disabled
                        valueProp="Pre-filled value"
                    />
                </div>
            );
        } else if (type == "playground") {
            return (
                <div>
                    <Input
                        name="default"
                        valueProp={knobs.value}
                        label={knobs.label}
                        placeholder={knobs.placeholder}
                        maxLength={knobs.maxLength}
                        counter={knobs.counter}
                        type={knobs.type}
                        clear={knobs.clear}
                        disabled={knobs.disabled}
                        selectOnFocus={knobs.selectOnFocus}
                        autoFocus={knobs.autoFocus}
                        error={knobs.error}
                        valid={knobs.valid}
                        onFocus={knobs.onFocus ? () => {console.log('onFocus event');} : () => {}}
                        onChange={knobs.onChange ? () => {console.log('onChange event');} : () => {}}
                        onBlur={knobs.onBlur ? () => {console.log('onBlur event');} : () => {}}
                    />
                </div>
            );
        }
        
    }
}

const typeOptions = {
    text: 'Text',
    email: 'Email',
    password: 'Password',
    textarea: 'Textarea',
    date: 'Date',
    number: 'Number',
    search: 'Search',
    file: 'File'
};

stories.add('Default', () => (
        <div>
            <h1 style={{fontFamily:'Open Sans'}}>Default</h1>
            <Container fluid={true}>
                <Row>
                    <Column xs={{col:12}} md={{col:6}}>
                        <InputWrapper type="default" />
                    </Column>
                </Row>
            </Container>
        </div>
    )).add('Filled', () => (
        <div>
            <h1 style={{fontFamily:'Open Sans'}}>Filled</h1>
            <Container fluid={true}>
                <Row>
                    <Column xs={{col:12}} md={{col:6}}>
                        <InputWrapper type="filled" />
                    </Column>
                </Row>
            </Container>
        </div>
    )).add('Clear', () => (
        <div>
            <h1 style={{fontFamily:'Open Sans'}}>Clear</h1>
            <Container fluid={true}>
                <Row>
                    <Column xs={{col:12}} md={{col:6}}>
                        <InputWrapper type="clear" />
                    </Column>
                </Row>
            </Container>
        </div>
    )).add('Icon', () => (
        <div>
            <h1 style={{fontFamily:'Open Sans'}}>Icon</h1>
            <Container fluid={true}>
                <Row>
                    <Column xs={{col:12}} md={{col:6}}>
                        <InputWrapper type="icon" />
                    </Column>
                </Row>
            </Container>
        </div>
    )).add('Auto-Focus', () => (
        <div>
            <h1 style={{fontFamily:'Open Sans'}}>Auto-Focus</h1>
            <Container fluid={true}>
                <Row>
                    <Column xs={{col:12}} md={{col:6}}>
                        <InputWrapper type="autofocus" />
                    </Column>
                </Row>
            </Container>
        </div>
    )).add('Select on focus', () => (
        <div>
            <h1 style={{fontFamily:'Open Sans'}}>Select on focus</h1>
            <Container fluid={true}>
                <Row>
                    <Column xs={{col:12}} md={{col:6}}>
                        <InputWrapper type="selectonfocus" />
                    </Column>
                </Row>
            </Container>
        </div>
    )).add('Counter', () => (
        <div>
            <h1 style={{fontFamily:'Open Sans'}}>Counter</h1>
            <Container fluid={true}>
                <Row>
                    <Column xs={{col:12}} md={{col:6}}>
                        <InputWrapper type="counter" />
                    </Column>
                </Row>
            </Container>
        </div>
    )).add('Error', () => (
        <div>
            <h1 style={{fontFamily:'Open Sans'}}>Error</h1>
            <Container fluid={true}>
                <Row>
                    <Column xs={{col:12}} md={{col:6}}>
                        <InputWrapper type="error" />
                    </Column>
                </Row>
            </Container>
        </div>
    )).add('Valid', () => (
        <div>
            <h1 style={{fontFamily:'Open Sans'}}>Valid</h1>
            <Container fluid={true}>
                <Row>
                    <Column xs={{col:12}} md={{col:6}}>
                        <InputWrapper type="valid" />
                    </Column>
                </Row>
            </Container>
        </div>
    )).add('Animation', () => (
        <div>
            <h1 style={{fontFamily:'Open Sans'}}>Animation</h1>
            <Container fluid={true}>
                <Row>
                    <Column xs={{col:12}} md={{col:6}}>
                        <InputWrapper type="animation" />
                    </Column>
                </Row>
            </Container>
        </div>
    )).add('Animation with icon', () => (
        <div>
            <h1 style={{fontFamily:'Open Sans'}}>Animation with icon</h1>
            <Container fluid={true}>
                <Row>
                    <Column xs={{col:12}} md={{col:6}}>
                        <InputWrapper type="animationicon" />
                    </Column>
                </Row>
            </Container>
        </div>
    )).add('Disabled', () => (
        <div>
            <h1 style={{fontFamily:'Open Sans'}}>Disabled</h1>
            <Container fluid={true}>
                <Row>
                    <Column xs={{col:12}} md={{col:6}}>
                        <InputWrapper type="disabled" />
                    </Column>
                </Row>
            </Container>
        </div>
    )).add('Playground', () => {
        const value = text('Value', '');
        const label = text('Label', 'Label');
        const placeholder = text('Placeholder', 'Placeholder');
        const maxLength = number('Max. length', 60);
        const counter = boolean('Show counter', false);
        const type = select('Type', typeOptions, 'text');
        const disabled = boolean('Disabled', false);
        const clear = boolean('Clear', false);
        const autoFocus = boolean('Auto-focus', false);
        const selectOnFocus = boolean('Select on focus', false);
        const error = text('Error', '');
        const valid = boolean('Valid', false);
        const onFocus = boolean('onFocus', false);
        const onChange = boolean('onChange', false);
        const onBlur = boolean('onBlur', false);
        const knobsObj = {
            value,
            label,
            placeholder,
            maxLength,
            counter,
            type,
            clear,
            disabled,
            selectOnFocus,
            autoFocus,
            error,
            valid,
            onFocus,
            onChange,
            onBlur
        };
        return (
            <div>
                <h1 style={{fontFamily:'Open Sans'}}>Playground</h1>
                <Container fluid={true}>
                    <Row>
                        <Column xs={{col:12}} md={{col:6}}>
                            <InputWrapper type="playground" knobs={knobsObj} />
                        </Column>
                    </Row>
                    <pre style={{background:'#ddd', padding:'15px', overflowX:'auto'}}>
                        <code>
                            {`import { Input } from 'r12-common';
      
<Input${value ? ` valueProp="${value}"` : ''}${label ? ` label="${label}"` : ''}${placeholder ? ` placeholder="${placeholder}"` : ''}${maxLength ? ` maxLength={${maxLength}}` : ''}${counter ? ' counter' : ''}${type ? ` type="${type}"` : ''}${clear ? ' clear' : ''}${disabled ? ' disabled' : ''}${selectOnFocus ? ' selectOnFocus' : ''}${autoFocus ? ' autoFocus' : ''}${error ? ` error="${error}"` : ''}${valid ? ' valid' : ''}${onFocus ? ` onFocus="() => {console.log('onFocus event')}"` : ''}${onChange ? ` onChange="() => {console.log('onChange event')}"` : ''}${onBlur ? ` onBlur="() => {console.log('onBlur event')}"` : ''}>`}
                        </code>
                    </pre>
                </Container>
            </div>
        )
    })