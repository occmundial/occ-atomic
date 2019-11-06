import React from 'react';
import Text from '../Text';
import ListItem from '../ListItem';
import colors from '../subatomic/colors';
import { html2json } from 'html2json';

const bullet = (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20">
      <circle cx="6" cy="10" r="3" fill="#222222" fillRule="evenodd"/>
    </svg>
  );

const allowedTags = [
    { type: 'p', component: Text, props: {} },
    { type: 'br', component: 'br', props: {} },
    { type: 'ul', component: Text, props: {} },
    { type: 'li', component: ListItem, props: { svg: bullet } },
    { type: 'h4', component: Text, props: { subheading: true, tag: 'h4' } },
    { type: 'strong', component: Text, props: { strong: true, tag: 'strong' } },
    { type: 'em', component: 'span', props: { style: { fontStyle: 'italic' } } }
];
export const getCleanValueHtml = (value) => {
    let newVal = value;

    const emtpyString = '';
    const enterString = '';
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
    allowedTags.forEach((tag) => {
        const regTag = new RegExp(`<${tag.type}>`, 'gi');
        newVal = newVal.replace(regTag, `${tagWrapper}${tag.type}${tagWrapper}`);
        const regTagEnd = new RegExp(`</${tag.type}>`, 'gi');
        newVal = newVal.replace(regTagEnd, `${tagWrapper}/${tag.type}${tagWrapper}`);
    });

    const regTags = /<[^>]+>/gi;

    newVal = newVal.replace(regTags, emtpyString);
    allowedTags.forEach((tag) => {
        const regTag = new RegExp(`${tagWrapper}${tag.type}${tagWrapper}`, 'gi');
        newVal = newVal.replace(regTag, `<${tag.type}>`);
        const regTagEnd = new RegExp(`${tagWrapper}/${tag.type}${tagWrapper}`, 'gi');
        newVal = newVal.replace(regTagEnd, `</${tag.type}>`);
    });
    return newVal;
};
const nodeTypes = { ROOT: 'root', ELEMENT: 'element', TEXT: 'text' };

let key = 0;
const getNextKey = () => {
    return key++;
};
const makeHtmlComponents = (htmlJson) => {
    const mapChildren = (children) => {
        const newChildren = children.map((val) => makeHtmlComponents(val));
        return newChildren.length === 1 ? newChildren[0] : newChildren;
    };
    if (htmlJson.node === nodeTypes.ROOT) {
        return mapChildren(htmlJson.child);
    } else if (htmlJson.node === nodeTypes.TEXT) {
        return htmlJson.text;
    }
    for (const tag of allowedTags) {
        if (htmlJson.tag === tag.type) {
            const childrenElements = htmlJson.child ? mapChildren(htmlJson.child) : '';
            if (tag.type === 'br') return (<tag.component key={getNextKey()} {...tag.props} />);
            return (<tag.component key={getNextKey()} {...tag.props} >{childrenElements}</tag.component>);
        }
    }
    return <span key={getNextKey()} />;
};

const getComponents = (htmlOriginal) => {
    const cleanHtml = getCleanValueHtml(htmlOriginal);
    const htmlJson = html2json(cleanHtml);
    const htmlComponents = makeHtmlComponents(htmlJson);
    return htmlComponents;
};

export default getComponents;
