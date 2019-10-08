import React from 'react';
import PropTypes from 'prop-types';
import Toast from './Toast';

export const toaster = {
	toast: {},
	success: function(value) {
		value.type = 'success';
		this.addToast(value);
	},
	error: function(value) {
		value.type = 'error';
		this.addToast(value);
	},
	info: function(value) {
		value.type = 'info';
		this.addToast(value);
	},
	warning: function(value) {
		value.type = 'warning';
		this.addToast(value);
	},
	close: function() {
		this.toast.closing = true;
		this.closeListener(this.toast);
	},
	addToast: function(value) {
		this.toast = value;
		this.addListener(this.toast);
	},
	addListener: null,
	registerAddListener: function(listener) {
		this.addListener = listener;
	},
	closeListener: null,
	registerCloseListener: function(listener) {
		this.closeListener = listener;
	}
};

class Toaster extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			toast: null,
			closing: false
		};
	}

	componentDidMount() {
		toaster.registerAddListener(this.onAdd);
		toaster.registerCloseListener(this.onClose);
	}

	onAdd = toast => {
		this.resetTimer();
		this.setState({
			toast
		});
		this.addTimer();
	}

	onClose = toast => {
		console.log(toast);
		this.resetTimer();
		this.setState({
			toast
		});
		this.timer = setTimeout(() => {
			toaster.toast = null;
			this.setState({
				toast: null
			});
		}, 600);
	}

	addTimer = () => {
		this.timer = setTimeout(() => {
			this.onClose();
		}, 5000);
	}

	resetTimer = () => {
		clearTimeout(this.timer);
		this.timer = null;
	}

	render() {
		const { toast } = this.state;
		const { classes } = this.props;
		return (
			<div className={classes.container}>
				{!!toast && (
					<Toast key={Math.random()} description={toast.description} title={toast.title} theme={toast.type} hasIcon={toast.hasIcon} closing={toast.closing} />
				)}
			</div>
		);
	}
}

Toaster.propTypes = {
	classes: PropTypes.object.isRequired
};

export default Toaster;
