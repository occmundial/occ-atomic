import React from 'react';
import PropTypes from 'prop-types';
import { Text, Card, Icon, colors, icons } from '@occmundial/occ-atomic';

const iconKeys = Object.keys(icons);

const Icons = ({ classes }) => {
	return (
		<div className={classes.page}>
			<Card shadow={3}>
				<Text heading bottomBase>
					Icons
				</Text>
				<Text>
					The easiest way to implement the icons of the library is using the
					Icon component.
				</Text>
				<Text>
					However, you can access directly to the icons library and implement
					them.
				</Text>
				<Text>Here's the process the library follows to give you an icon:</Text>
				<ul>
					<li>
						<Text>You choose an icon name</Text>
					</li>
					<li>
						<Text>
							The library accesses to the object of the icon, having values for
							width, height, display, and a function called icon.
						</Text>
					</li>
					<li>
						<Text>
							This icon function contains the svg of the icon, but can receive
							any color and inject it to its code.
						</Text>
					</li>
					<li>
						<Text>
							The colors must be inside an array, so the icon can inject the
							right color in the right place (in case of icons with more than
							one color).
						</Text>
					</li>
					<li>
						<Text>
							This icon function then returns the svg with the right colors, and
							then it must be passed to the base function.
						</Text>
					</li>
					<li>
						<Text>
							The base function transforms the svg to base64 and returns a
							background css property with the svg and other properties like
							repetition and position.
						</Text>
					</li>
				</ul>
			</Card>
			<Card shadow={3} style={{ marginTop: 30 }}>
				{iconKeys.map(icon => {
					if (icon != 'base' && icon != 'testing') {
						return (
							<div key={icon} className={classes.iconBlock} alt={icon}>
								<Icon
									iconName={icon}
									colors={[colors.grey900, colors.grey900]}
									className={classes.icon}
								/>
							</div>
						);
					}
					return null;
				})}
			</Card>
		</div>
	);
};

Icons.propTypes = {
	classes: PropTypes.object
};

export default Icons;
