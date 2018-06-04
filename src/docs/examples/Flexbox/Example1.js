/* Row and Column */
import React from 'react';
import { Flexbox, colors } from 'r12-common';

export default function Example1() {
    return (
        <div>
            <Flexbox display="inline-flex" direction="row" style={{background:colors.grey3, width:200, height:100}}>
                <div style={{background:'#508898', width:50, height:50, color:'#fff'}}>1</div>
                <div style={{background:'#819fae', width:50, height:50, color:'#fff'}}>2</div>
                <div style={{background:'#BBDAE3', width:50, height:50, color:'#fff'}}>3</div>
            </Flexbox>
            <Flexbox display="inline-flex" direction="col" style={{background:colors.grey3, width:100, height:200}}>
                <div style={{background:'#508898', width:50, height:50, color:'#fff'}}>1</div>
                <div style={{background:'#819fae', width:50, height:50, color:'#fff'}}>2</div>
                <div style={{background:'#BBDAE3', width:50, height:50, color:'#fff'}}>3</div>
            </Flexbox>
        </div>
    )
}