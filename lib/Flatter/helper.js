import React from 'react';
import Text from '../Text';
import ListItem from '../ListItem';
import { html2json } from 'html2json';

const allowedTags = [
    { type: 'p', component: Text, props: {} },
    { type: 'br', component: 'br', props: {} },
    { type: 'ul', component: Text, props: {} },
    { type: 'li', component: ListItem, props: {} },
    { type: 'h4', component: Text, props: { subheading: true, tag: 'h4' } },
    { type: 'strong', component: Text, props: { strong: true, tag: 'strong' } },
    { type: 'em', component: 'span', props: { style: { fontStyle: 'italic' } } }
];
const getCleanValueHtml = (value, quillEditor = false) => {
    let newVal = value;
  
    const emtpyString = '';
    // a p tag is added as per quill editor does not support br direct
    // internally the component will replace it with <p><br></p>
    const enterString = quillEditor ? '<p> </p>' : '';
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
  
    const allowedTags = ['p', 'br', 'ul', 'li', 'h4', 'strong', 'em'];
    const tagWrapper = '¡¡¡¡';
    const tagWrapperEnd = '¿¿¿¿';
  
    allowedTags.forEach((tag) => {
      const regTag = new RegExp(`<${tag}>`, 'gi');
      newVal = newVal.replace(regTag, `${tagWrapper}${tag}${tagWrapperEnd}`);
      const regTagEnd = new RegExp(`</${tag}>`, 'gi');
      newVal = newVal.replace(regTagEnd, `${tagWrapper}/${tag}${tagWrapperEnd}`);
    });
  
    const regTags = /<[^>]+>/gi;
  
    newVal = newVal.replace(regTags, emtpyString);
    allowedTags.forEach((tag) => {
      const regTag = new RegExp(`${tagWrapper}${tag}${tagWrapperEnd}`, 'gi');
      newVal = newVal.replace(regTag, `<${tag}>`);
      const regTagEnd = new RegExp(`${tagWrapper}/${tag}${tagWrapperEnd}`, 'gi');
      newVal = newVal.replace(regTagEnd, `</${tag}>`);
    });
    return newVal;
};
const nodeTypes = { ROOT: 'root', ELEMENT: 'element', TEXT: 'text' };

let liItems = [];
const getUlItem = (htmlJson) => {
    getLiItem(htmlJson);
    liItems.sort((a, b) => (a.order - b.order));
    const ret = liItems.map((elem) => (elem.li));
    liItems = [];
    return ret;
};
const getLiItem = (htmlJson, bold = false, italic = false, order = 0) => {
    const children = [];
    const orderPlusOne = order++;
    for (const element of htmlJson) {
        if (element.node === nodeTypes.TEXT) {
            if (element.text !== '') {
                children.push({ text: element.text, props: { bold, italic } });
            }
        } else if (element.tag === 'li') {
            const elem = element.child !== undefined ? getLiItem(element.child, bold, italic, orderPlusOne) : [{text: ''}];
            if (elem[0] && elem[0].length !== 0) {
                liItems.push({ li: <ListItem child={elem} />, order });
            }
        } else if (element.tag === 'strong') {
            const elem = getLiItem(element.child, true, italic, orderPlusOne);
            children.push(...elem);
        } else if (element.tag === 'em') {
            const elem = getLiItem(element.child, bold, true, orderPlusOne);
            children.push(...elem);
        } else if (element.child !== undefined) {
            const elem = getLiItem(element.child, bold, italic, orderPlusOne);
            children.push(...elem);
        }
    }
    return children;
};

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
            if (tag.type === 'ul') return getUlItem(htmlJson.child);
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
