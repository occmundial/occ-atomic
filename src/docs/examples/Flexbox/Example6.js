/* Child Flexbox */
import React from 'react';
import { Flexbox, colors } from 'r12-common';

export default function Example6() {
    return (
        <div>
            <Flexbox display="flex" style={{background:colors.grey3, width:200, height:75}}>
                <Flexbox order={2} style={{background:'#508898', width:50, height:50, color:'#fff'}}>1</Flexbox>
                <Flexbox order={3} style={{background:'#819fae', width:50, height:50, color:'#fff'}}>2</Flexbox>
                <Flexbox order={1} style={{background:'#BBDAE3', width:50, height:50, color:'#fff'}}>3</Flexbox>
            </Flexbox><br />
            <Flexbox display="flex" style={{background:colors.grey3, width:200, height:75}}>
                <Flexbox flex="1" style={{background:'#508898', width:50, height:50, color:'#fff'}}>1</Flexbox>
                <Flexbox style={{background:'#819fae', width:50, height:50, color:'#fff'}}>2</Flexbox>
                <Flexbox style={{background:'#BBDAE3', width:50, height:50, color:'#fff'}}>3</Flexbox>
            </Flexbox><br />
            <Flexbox display="flex" alignItems="center" style={{background:colors.grey3, width:200, height:75}}>
                <Flexbox alignSelf="end" style={{background:'#508898', width:50, height:50, color:'#fff'}}>1</Flexbox>
                <Flexbox style={{background:'#819fae', width:50, height:50, color:'#fff'}}>2</Flexbox>
                <Flexbox style={{background:'#BBDAE3', width:50, height:50, color:'#fff'}}>3</Flexbox>
            </Flexbox>
        </div>
    )
}