import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';
import Icon from '../Icon';
import Tag from '../Tag';
import Flexbox from '../Flexbox';

import colors from '../subatomic/colors';

/** Component to create an accordion section. The content will be hidden by default, and shown after click. */
class SlideDown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			expanded: this.props.expanded,
			toggled: this.props.expanded
		};
		this.toggleContent = this.toggleContent.bind(this);
	}

	componentDidUpdate(prevProps) {
		const { expanded } = this.props;
		if (prevProps.expanded !== expanded) {
			this.toggleContent(expanded);
		}
	}

	toggleContent(value) {
		const { onToggle } = this.props;
		this.setState({
			[value ? 'expanded' : 'toggled']: value
		});
		if (onToggle) onToggle(value);
		setTimeout(
			() => {
				this.setState({
					[value ? 'toggled' : 'expanded']: value
				});
			},
			value ? 0 : 300
		);
	}

	render() {
		const { expanded, toggled } = this.state;
		const {
			classes,
			title,
			children,
			tag,
			textSize,
			strong,
			theme,
			noJustified
		} = this.props;
		const getTextSize = () => {
			switch (textSize) {
				case 'md':
					return { standard: true };
				case 'lg':
					return { large: true };
				case 'sm':
					return { small: true };
				default:
					return { standard: true };
			}
		};
		const getTextTheme = () => {
			switch (theme) {
				case 'blue':
					return { link: true };
				case 'default':
				default:
					return null;
			}
		};
		const getIconColor = () => {
			switch (theme) {
				case 'blue':
					return colors.textLink;
				case 'default':
				default:
					return colors.grey900;
			}
		};
		const getTextProps = () => ({ ...getTextSize(), ...getTextTheme() });
		return (
			<div className={classes.wrapper}>
				<div
					className={classes.button}
					onClick={() => this.toggleContent(!expanded)}
				>
					<Flexbox
						display="flex"
						justifyContent={!noJustified ? 'between' : null}
						alignItems="start"
					>
						<Flexbox display="flex" alignItems="center">
							<Flexbox display="flex" alignItems="start" wrap="wrap">
								<div>
									<Text
										{...getTextProps()}
										strong={strong}
										tag="label"
										className={classes.text}
									>
										{title}
									</Text>
									{tag && (
										<Tag theme="info" className={classes.tag}>
											{tag}
										</Tag>
									)}
								</div>
							</Flexbox>
						</Flexbox>
						<Flexbox flex="0 0 auto">
							<Icon
								iconName="arrowDown"
								colors={[getIconColor()]}
								className={classes.icon}
								style={{ transform: toggled ? 'rotate(180deg)' : '' }}
							/>
						</Flexbox>
					</Flexbox>
				</div>
				{expanded && (
					<div
						className={`${classes.content} ${
							toggled ? classes.show : classes.hide
						}`}
					>
						{children}
					</div>
				)}
			</div>
		);
	}
}

SlideDown.defaultProps = {
	expanded: false,
	textSize: 'md',
	strong: false,
	theme: 'default',
	noJustified: false
};

SlideDown.propTypes = {
	classes: PropTypes.object,
	children: PropTypes.node,
	/** Title of the tab. */
	title: PropTypes.string,
	/** Set this as true to show the content by default. If the external prop is the same of the internal state the component dont toggle */
	expanded: PropTypes.bool,
	/** Text to show as a label right next to the Title */
	tag: PropTypes.string,
	/** Function to call when the SlideDown expands or collapses. It returns true if it is expanded and false if it is collapsed. */
	onToggle: PropTypes.func,
	/** Size of the Text to show sm, md, lg*/
	textSize: PropTypes.oneOf(['sm', 'md', 'lg']),
	/** If the text is required to be bold*/
	strong: PropTypes.bool,
	/** Theme of the SlideDown */
	theme: PropTypes.oneOf(['default', 'blue']),
	/** The Title container has an alignment by default. Use this property if you need to remove it. */
	noJustified: PropTypes.bool
};

export default SlideDown;
