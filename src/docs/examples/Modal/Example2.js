/* Small Modal */
import React from 'react';
import { Modal, Button, Text } from '@occmundial/occ-atomic';

export default class Example1 extends React.Component {

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
                <Button onClick={this.toggle}>Show modal</Button>
                <Modal
                    container={document.body}
                    show={show}
                    onClose={this.toggle}
                    title="Small Modal"
                    mainBtn={{
                        text:'Agree',
                        onClick:() => {
                            alert('Done!');
                        }
                    }}
                    secBtn={{
                        text:'Cancel',
                        onClick:this.toggle
                    }}
                    size="sm"
                >
                    <Text>Bacon ipsum dolor amet tenderloin short ribs sausage swine pancetta hamburger frankfurter.</Text>
                </Modal>
            </div>
        );
    }
}
