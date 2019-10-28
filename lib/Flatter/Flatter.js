/* eslint-disable react/no-multi-comp */
import React from 'react';
import PropTypes from 'prop-types';
import { html2json } from 'html2json';

import Text from '../Text';

const allowedTags = [
    { type: 'p', component: Text, props: {} },
    { type: 'br', component: 'br', props: {} },
    { type: 'ul', component: 'ul', props: {} },
    { type: 'li', component: 'li', props: {} },
    { type: 'h4', component: Text, props: { subheading: true, tag: 'h4' } },
    { type: 'strong', component: Text, props: { strong: true, tag: 'strong' } },
    { type: 'em', component: 'span', props: { style: { fontStyle: 'italic' } } }
];
export const getCleanValueHtml = (value) => {
    let newVal = value;

    const emtpyString = '';
    // a p tag is added as per quill editor does not support br direct
    // internally the component will replace it with <p><br></p>
    const enterString = '<br>';
    const regCrLf = /[\r\n]+/gi;
    const regStyles = / style=[^>]+/gi;
    const regClass = / class=[^>]+/gi;
    const regSrc = / src=[^>]+/gi;
    const regLink = / href=[^>]+/gi;
    newVal = newVal.replace(regCrLf, enterString);
    newVal = newVal.replace(regStyles, emtpyString);
    newVal = newVal.replace(regClass, emtpyString);
    newVal = newVal.replace(regSrc, emtpyString);
    newVal = newVal.replace(regLink, emtpyString);

    const tagWrapper = '¡¡';
    // eslint-disable-next-line no-restricted-syntax
    for (const tag of allowedTags) {
        const regTag = new RegExp(`<${tag.type}>`, 'gi');
        newVal = newVal.replace(regTag, `${tagWrapper}${tag.type}${tagWrapper}`);
        const regTagEnd = new RegExp(`</${tag.type}>`, 'gi');
        newVal = newVal.replace(regTagEnd, `${tagWrapper}/${tag.type}${tagWrapper}`);
    }

    const regTags = /<[^>]+>/gi;

    newVal = newVal.replace(regTags, emtpyString);
    // eslint-disable-next-line no-restricted-syntax
    for (const tag of allowedTags) {
        const regTag = new RegExp(`${tagWrapper}${tag.type}${tagWrapper}`, 'gi');
        newVal = newVal.replace(regTag, `<${tag.type}>`);
        const regTagEnd = new RegExp(`${tagWrapper}/${tag.type}${tagWrapper}`, 'gi');
        newVal = newVal.replace(regTagEnd, `</${tag.type}>`);
    }
    return newVal;
};
const nodeTypes = { ROOT: 'root', ELEMENT: 'element', TEXT: 'text' };

let key = 0;
const getNextKey = () => {
    return key++;
};
const makeHtmlComponents = (htmlJson) => {
    const mapChildren = (children) => {
        const newChildren = children.map((val) => {
            return makeHtmlComponents(val);
        });
        return newChildren.length === 1 ? newChildren[0] : newChildren;
    };
    if (htmlJson.node === nodeTypes.ROOT) {
        return mapChildren(htmlJson.child);
    } else if (htmlJson.node === nodeTypes.TEXT) {
        return htmlJson.text;
    }
    // else ... htmlJson.node === nodeTypes.ELEMENT
    for (const tag of allowedTags) {
        if (htmlJson.tag === tag.type) {
            const childrenElements = htmlJson.child ? mapChildren(htmlJson.child) : '';
            if (tag.type === 'br') return (<tag.component key={getNextKey()} {...tag.props} />); 
            return (<tag.component key={getNextKey()} {...tag.props} >{childrenElements}</tag.component>);
        }
    }
    return <span key={getNextKey()} />;
};

/** Flatter component with test htmlText */
const Flatter = ({ id, className, style, htmlText }) => {
    const getComponents = (htmlOriginal) => {
        const cleanHtml = getCleanValueHtml(htmlOriginal);
        const htmlJson = html2json(cleanHtml);
        const htmlComponents = makeHtmlComponents(htmlJson);
        return htmlComponents;
    };
    const getComponents2 = (htmlOriginal) => {
        const cleanHtml = getCleanValueHtml(htmlOriginal);
        return cleanHtml;
    };

    return (
        <div id={id} className={className} style={style}>
            <div>{getComponents2(htmlText)}</div>
            <div>{getComponents(htmlText)}</div>
        </div>
    );
};

Flatter.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    /** Text of the Flatter. Must be a valid HTML Code */
    htmlText: PropTypes.string.isRequired
};

export default Flatter;
