/* Drawer */
import React from 'react';
import { Button, Drawer, Text, NavTab } from '@occmundial/occ-atomic';

class Example1 extends React.Component {

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
                <Drawer
                    container={document.body}
                    show={show}
                    onClose={this.toggle}
                    header={(
                        <NavTab right={[
                            {
                                type: 'icon',
                                iconName: 'x',
                                onClick: () => this.setState({ show: false })
                            }
                        ]} />
                    )}
                >
                    <div>
                        <Text>This is a Drawer</Text>
                    </div>
                </Drawer>
            </div>
        );
    }
}

export default Example1;
