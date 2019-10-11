import isEmpty from 'lodash/isEmpty';

export const toaster = {
	toastId: 0,
	toast: null,
	success: function(value) { value.type = 'success'; this.addToast(value); },
	error: function(value) { value.type = 'error'; this.addToast(value); },
	info: function(value) { value.type = 'info'; this.addToast(value); },
	warning: function(value) { value.type = 'warning'; this.addToast(value); },
	close: function() {
		if (this.closeListener && !isEmpty(this.toast)) this.closeListener(this.toast);
	},
	addToast: function(value) {
		if (this.addListener) {
			this.toastId++;
			this.toast = value;
			this.addListener(this.toast, this.toastId);
		}
	},
	removeToast: function() { this.toast = null; },
	addListener: null,
	registerAddListener: function(listener) { this.addListener = listener; },
	closeListener: null,
	registerCloseListener: function(listener) { this.closeListener = listener; }
};

export function Timer(callback, delay) {
    let timerId, start, remaining = delay;

    this.cancel = function() {
        clearTimeout(timerId);
    };

    this.pause = function() {
        window.clearTimeout(timerId);
        remaining -= new Date() - start;
    };

    this.resume = function() {
        start = new Date();
        window.clearTimeout(timerId);
        timerId = window.setTimeout(callback, remaining);
    };

    this.resume();
};
