export const compareText = (text = '', term = '') => {
	let textLC = text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
	let termLC = term.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
	let index = textLC.indexOf(termLC);
	return index;
};

export const separateText = (itemText = "", index, term) => {
	let text = [itemText.substr(0, index), itemText.substr(index, term.length), itemText.substr(index+term.length, itemText.length)];
	return text;
};
