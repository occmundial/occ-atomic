/* Modal */
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
                >
                    <Text>Bacon ipsum dolor amet kielbasa ham frankfurter pork loin pork chop pastrami t-bone beef salami, andouille venison shoulder jerky chuck. Tenderloin landjaeger shoulder ground round. Corned beef shankle tail andouille sausage chuck turkey pork chop pancetta flank burgdoggen boudin prosciutto buffalo. Picanha swine jowl ham hock cow bresaola meatball venison short loin cupim porchetta ham beef tenderloin. Cow sirloin landjaeger turkey corned beef frankfurter picanha ribeye ball tip pastrami. Shoulder spare ribs cow turkey beef ribs boudin pastrami ham hock shank biltong chuck bresaola t-bone.</Text>
                </Modal>
            </div>
        );
    }
}
