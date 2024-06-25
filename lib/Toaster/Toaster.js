import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Toast from './Toast';
import { toaster, Timer } from './functions';

const timings = {
	normal: 5000,
	longer: 8000
};

/**
* The Toaster component allows you to trigger any of the predefined types of alerts. Insert the Toaster component in any part of your site, and handle the alerts with the toaster object's API.
* Check the example to see how to trigger any kind of alert. This component will only show one toast at a time, any new toast will automatically dismiss the current toast.
* The toast object can have the next properties:
* • title - string
* • description -string
* • hasIcon - boolean
* • action - object with label and onClick
* • timer - one of: 'normal', 'longer'
* You can only mount one Toaster component at a time, since mounting an instance sets the toaster listeners, and unmounting the component nullifies the existing listeners, so having two instances of Toaster and unmounting one will break them.
*/
class Toaster extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			toast: null,
			toastId: null
		};
	}

	componentDidMount() {
		toaster.registerAddListener(this.onAdd);
		toaster.registerCloseListener(this.onClose);
	}

	componentWillUnmount() {
		toaster.registerAddListener(null);
		toaster.registerCloseListener(null);
		this.resetTimer();
	}

	onAdd = (toast, toastId) => {
		this.resetTimer();
		toast.closing = false;
		this.setState({ toast, toastId }, () => {
			if (!toast.closeIcon)
				this.addTimer();
		});
	}

	onClose = toast => {
		this.resetTimer();
		toast.closing = true;
		this.setState({ toast });
		this.timer = new Timer(() => {
			toaster.removeToast();
			this.setState({ toast: null });
		}, 300);
	}

	pauseTimer = () => this.timer.pause();

	resumeTimer = () => this.timer.resume();

	addTimer = () => {
		const { toast } = this.state;
		const defaultTime = timings.normal;
		const time = toast.timer ? timings[toast.timer] || defaultTime : defaultTime;
		this.timer = new Timer(() => {
			this.onClose(toast);
		}, time);
	}

	resetTimer = () => { if (this.timer) this.timer.cancel(); }

	render() {
		const { toast, toastId } = this.state;
		const { classes, container } = this.props;
		const ToasterComponent = (
			<div className={classes.container}>
				{!!toast && (
					<Toast
						key={toastId}
						description={toast.description}
						title={toast.title}
						theme={toast.type}
						action={toast.action}
						closeIcon={toast.closeIcon}
						closing={toast.closing}
						testId={toast.testId}
						onClose={() => this.onClose(toast)}
						pauseTimer={this.pauseTimer}
						resumeTimer={this.resumeTimer}
					/>
				)}
			</div>
		);
        return container ? (
			ReactDOM.createPortal(
                ToasterComponent,
                container
            )
		) : ToasterComponent;
	}
}

Toaster.propTypes = {
	classes: PropTypes.object.isRequired,
	/** DOM Element to append the Toaster component into it. If you don't specify a container the Toaster will be rendered in the exact same DOM position you used it. This can in some cases generate problems with z-index or position. */
	container: PropTypes.object
};

export default Toaster;
