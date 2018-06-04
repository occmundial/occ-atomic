/* Justify content */
import React from 'react';
import { Flexbox, colors } from 'r12-common';

export default function Example3() {
    return (
        <div>
            <Flexbox display="flex" justifyContent="start" style={{background:colors.grey3, width:200}}>
                <div style={{background:'#508898', width:50, height:50, color:'#fff'}}>1</div>
                <div style={{background:'#819fae', width:50, height:50, color:'#fff'}}>2</div>
                <div style={{background:'#BBDAE3', width:50, height:50, color:'#fff'}}>3</div>
            </Flexbox><br />
            <Flexbox display="flex" justifyContent="end" style={{background:colors.grey3, width:200}}>
                <div style={{background:'#508898', width:50, height:50, color:'#fff'}}>1</div>
                <div style={{background:'#819fae', width:50, height:50, color:'#fff'}}>2</div>
                <div style={{background:'#BBDAE3', width:50, height:50, color:'#fff'}}>3</div>
            </Flexbox><br />
            <Flexbox display="flex" justifyContent="center" style={{background:colors.grey3, width:200}}>
                <div style={{background:'#508898', width:50, height:50, color:'#fff'}}>1</div>
                <div style={{background:'#819fae', width:50, height:50, color:'#fff'}}>2</div>
                <div style={{background:'#BBDAE3', width:50, height:50, color:'#fff'}}>3</div>
            </Flexbox><br />
            <Flexbox display="flex" justifyContent="between" style={{background:colors.grey3, width:200}}>
                <div style={{background:'#508898', width:50, height:50, color:'#fff'}}>1</div>
                <div style={{background:'#819fae', width:50, height:50, color:'#fff'}}>2</div>
                <div style={{background:'#BBDAE3', width:50, height:50, color:'#fff'}}>3</div>
            </Flexbox><br />
            <Flexbox display="flex" justifyContent="around" style={{background:colors.grey3, width:200}}>
                <div style={{background:'#508898', width:50, height:50, color:'#fff'}}>1</div>
                <div style={{background:'#819fae', width:50, height:50, color:'#fff'}}>2</div>
                <div style={{background:'#BBDAE3', width:50, height:50, color:'#fff'}}>3</div>
            </Flexbox><br />
            <Flexbox display="flex" justifyContent="evenly" style={{background:colors.grey3, width:200}}>
                <div style={{background:'#508898', width:50, height:50, color:'#fff'}}>1</div>
                <div style={{background:'#819fae', width:50, height:50, color:'#fff'}}>2</div>
                <div style={{background:'#BBDAE3', width:50, height:50, color:'#fff'}}>3</div>
            </Flexbox>
        </div>
    )
}