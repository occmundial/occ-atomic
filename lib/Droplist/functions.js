import unorm from 'unorm';

export const compareText = (text = '', term = '') => {
	const accents = /[\u0300-\u036f]/g;
	const textLC = unorm.nfd(text.toLowerCase().replace(accents, ""));
	const termLC = unorm.nfd(term.toLowerCase().replace(accents, ""));
	const index = textLC.indexOf(termLC);
	return index;
};

export const separateText = (itemText = "", index, term) => {
	const text = [itemText.substr(0, index), itemText.substr(index, term.length), itemText.substr(index+term.length, itemText.length)];
	return text;
};
