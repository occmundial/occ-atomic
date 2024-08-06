/* Modal with image on the left */
import React from 'react';
import { Modal, Button, Text, colors } from '@occmundial/occ-atomic';

export default class Example5 extends React.Component {

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
                    title="Modal"
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
                    imgLeft={{
                        img: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        color: colors.bgGrey
                    }}
                    size="lg"
                >
                    <Text>Bacon ipsum dolor amet kielbasa ham frankfurter pork loin pork chop pastrami t-bone beef salami, andouille venison shoulder jerky chuck. Tenderloin landjaeger shoulder ground round. Corned beef shankle tail andouille sausage chuck turkey pork chop pancetta flank burgdoggen boudin prosciutto buffalo. Picanha swine jowl ham hock cow bresaola meatball venison short loin cupim porchetta ham beef tenderloin. Cow sirloin landjaeger turkey corned beef frankfurter picanha ribeye ball tip pastrami. Shoulder spare ribs cow turkey beef ribs boudin pastrami ham hock shank biltong chuck bresaola t-bone.</Text>
                </Modal>
            </div>
        );
    }
}
