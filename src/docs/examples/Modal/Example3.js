/* Large Modal */
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
                    title="Large modal"
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
                    size="lg"
                >
                    <Text>Bacon ipsum dolor amet tenderloin short ribs sausage swine pancetta hamburger frankfurter, capicola alcatra pork belly fatback. Biltong filet mignon cupim prosciutto porchetta shank tail pig pork loin picanha bacon pancetta shankle. Filet mignon tongue jerky strip steak, spare ribs pork loin bresaola tenderloin shankle beef ribs salami. Bresaola cupim turkey pork belly, chicken beef ribs frankfurter jerky pork.</Text>
                    <Text>Alcatra bresaola swine ham. Prosciutto brisket shankle, pork belly ham chuck bresaola swine cow sirloin. Tenderloin corned beef tongue t-bone chuck flank. Andouille leberkas pig sausage frankfurter, ham hock kielbasa prosciutto kevin drumstick flank beef picanha beef ribs chicken. Andouille buffalo jerky flank ball tip alcatra salami boudin fatback short loin turkey t-bone rump drumstick. Alcatra flank kevin brisket doner, frankfurter tenderloin pastrami fatback pork chop meatloaf cow filet mignon. Hamburger pancetta tenderloin, drumstick jowl strip steak chicken tongue corned beef meatball.</Text>
                    <Text>Turducken leberkas chuck cow, cupim bresaola brisket tenderloin corned beef beef buffalo shoulder sirloin capicola jerky. Filet mignon pork chop andouille, turducken strip steak chicken biltong kielbasa frankfurter spare ribs rump short ribs short loin shoulder. Burgdoggen corned beef pork chuck beef ribs biltong. Burgdoggen salami short ribs chuck meatball pork loin, ham picanha pork. Sausage chicken spare ribs, pork belly meatloaf sirloin pork chop beef. Corned beef landjaeger beef ribs rump shank, salami tongue capicola short ribs shoulder bacon biltong bresaola pork belly cow.</Text>
                </Modal>
            </div>
        );
    }
}
