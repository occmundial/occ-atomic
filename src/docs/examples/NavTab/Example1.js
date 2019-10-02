/* NavTab with NavTop */
import React from 'react';
import { NavTab, Icon } from '@occmundial/occ-atomic';

class Example1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dropdown: false
        };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop() {
        const { dropdown } = this.state;
        this.setState({
            dropdown: !dropdown
        });
    }

    render() {
        const { dropdown } = this.state;
        const left = [
            {
                key:0,
                type: 'logo',
                logo: (
                    <a href="#NavTab">
                        <Icon iconName="occHorizontalWhite" />
                    </a>
                )
            },
            {
                key:1,
                type:'dropdownLink',
                text:'Dropdown link',
                onClick: this.onDrop,
                selected: dropdown
            },
            {
                key:2,
                type:'link',
                text:'Standard link',
                link:'#NavTab'
            }
        ];
        const right = [
            {
                key:1,
                type:'button',
                text:'Primary CTA',
                theme:'primary'
            },
            {
                key:2,
                type:'button',
                text:'Secondary CTA'
            }
        ];
        const top = [
            {
                key:1,
                text:'First link',
                link:'#NavTab'
            },
            {
                key:2,
                text:'Current link',
                link:'#NavTab',
                selected: true
            },
            {
                key:3,
                text:'onClick item',
                onClick:() => { console.log('whatever'); }
            }
        ];
        const left2 = [...left];
        left2[0] = {
            key:0,
            type: 'custom',
            custom: (
                <a href="#NavTab" style={{marginRight:32, display:'inline-block'}}>
                    <Icon iconName="occHorizontalGrey" />
                </a>
            )
        };
        return (
            <div>
                <NavTab top={top} blue left={left} right={right} />
                <NavTab top={top} left={left2} right={right} />
            </div>
        );
    }
}

export default Example1;
