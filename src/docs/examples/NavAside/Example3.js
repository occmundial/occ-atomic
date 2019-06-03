/* Width */
import React from 'react';
import { NavItem, Button, NavAside, Icon, Flexbox, Text } from '@occmundial/occ-atomic';

class Example3 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            show: !this.state.show
        });
    }

    render() {
        const { show } = this.state;
        return (
            <div>
                <Button onClick={this.toggle}>Show Aside</Button>
                <NavAside
                container={document.body}
                show={show}
                onClose={this.toggle}
                top={
                  <Flexbox display="flex" justifyContent="start" alignItems="start">
                    <Icon iconName="user" />
                    <Text small>Recludator de Prueba</Text>
                  </Flexbox>
                }
                width={600}
                >
                    <div>
                        <NavItem link="#NavItem" notification>Link With Notification</NavItem>
                        <br />
                        <NavItem link="#NavItem" selected>Link Selected</NavItem>
                        <br />
                        <hr />
                        <NavItem link="#NavItem">Another Link</NavItem>
                    </div>
                </NavAside>
            </div>
        );
    }
}

export default Example3;