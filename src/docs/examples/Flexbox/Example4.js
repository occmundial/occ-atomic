/* Align items */
import React from 'react';
import { Flexbox, colors } from '@occmundial/occ-atomic';

export default function Example4() {
    return (
        <div>
            <Flexbox display="flex" alignItems="start" style={{background:colors.grey3, width:200, height:75}}>
                <div style={{background:'#508898', width:50, height:50, color:'#fff'}}>1</div>
                <div style={{background:'#819fae', width:50, height:50, color:'#fff'}}>2</div>
                <div style={{background:'#BBDAE3', width:50, height:50, color:'#fff'}}>3</div>
            </Flexbox><br />
            <Flexbox display="flex" alignItems="end" style={{background:colors.grey3, width:200, height:75}}>
                <div style={{background:'#508898', width:50, height:50, color:'#fff'}}>1</div>
                <div style={{background:'#819fae', width:50, height:50, color:'#fff'}}>2</div>
                <div style={{background:'#BBDAE3', width:50, height:50, color:'#fff'}}>3</div>
            </Flexbox><br />
            <Flexbox display="flex" alignItems="center" style={{background:colors.grey3, width:200, height:75}}>
                <div style={{background:'#508898', width:50, height:50, color:'#fff'}}>1</div>
                <div style={{background:'#819fae', width:50, height:50, color:'#fff'}}>2</div>
                <div style={{background:'#BBDAE3', width:50, height:50, color:'#fff'}}>3</div>
            </Flexbox><br />
            <Flexbox display="flex" alignItems="stretch" style={{background:colors.grey3, width:200, height:75}}>
                <div style={{background:'#508898', width:50, height:50, color:'#fff'}}>1</div>
                <div style={{background:'#819fae', width:50, height:50, color:'#fff'}}>2</div>
                <div style={{background:'#BBDAE3', width:50, height:50, color:'#fff'}}>3</div>
            </Flexbox><br />
            <Flexbox display="flex" alignItems="base" style={{background:colors.grey3, width:200, height:75}}>
                <div style={{background:'#508898', width:50, height:50, color:'#fff'}}>1</div>
                <div style={{background:'#819fae', width:50, height:50, color:'#fff'}}>2</div>
                <div style={{background:'#BBDAE3', width:50, height:50, color:'#fff'}}>3</div>
            </Flexbox>
        </div>
    )
}