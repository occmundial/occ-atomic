import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import Text from '../../Text';
import Icon from '../../Icon';
import spacing from '../../subatomic/spacing';
import colors from '../../subatomic/colors';

import useStyles from './styles';

const itemTypes = {
	link: 'link',
	icon: 'icon',
	custom: 'custom'
};

const List = ({ list: { collapse, title, items }, isMobile }) => {
	const classes = useStyles();
	const [toggle, setToggle] = useState(false);

	const toggleList = useCallback(() => setToggle(!toggle), [toggle]);

	const renderLink = useCallback(item => {
		return (
			<Text key={item.key} small bottomTiny>
				<a href={item.href} target={item.target} rel={item.rel} className={classes.link} title={item.title}>
					{item.text}
				</a>
			</Text>
		);
	}, [classes]);

	const renderIcon = useCallback(item => {
		return (
			<div key={item.key} className={classes.iconWrapper} title={item.title}>
				<Icon
					iconName={item.iconName}
					className={classes.icon}
					onClick={item.onClick}
					colors={[colors.grey600]}
				/>
			</div>
		);
	}, [classes]);

	const renderCustom = useCallback(item => <div key={item.key}>{item.custom}</div>, []);

	const renderItem = useCallback(item => {
		if (item.type === itemTypes.link) return renderLink(item);
		else if (item.type === itemTypes.icon) return renderIcon(item);
		else if (item.type === itemTypes.custom) return renderCustom(item);
	}, [renderLink, renderIcon, renderCustom]);

	const isCollapsible = useMemo(() => collapse || isMobile, [collapse, isMobile]);

	return (
		<div>
			<div
				onClick={isCollapsible ? toggleList : null}
				className={`${classes.title} ${
					isCollapsible ? classes.collapsible : ''
				}`}
			>
				<Text tag="span">{title}</Text>
				{isCollapsible && (
					<Icon
						iconName="forward"
						width={spacing.small}
						height={spacing.small}
						className={`${classes.arrow} ${
							toggle ? classes.arrowUp : classes.arrowDown
						}`}
					/>
				)}
			</div>
			<div
				className={`${classes.list} ${
					toggle || !isCollapsible ? classes.toggle : ''
				}`}
			>
				{items.map(item => renderItem(item))}
			</div>
		</div>
	);
};

List.propTypes = {
	classes: PropTypes.object,
	list: PropTypes.object,
	isMobile: PropTypes.bool
};

export default List;
