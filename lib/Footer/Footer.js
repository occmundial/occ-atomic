import React from 'react';
import PropTypes from 'prop-types';
import Grid from '../Grid';
import WindowSize from '../WindowSize';
import Flexbox from '../Flexbox';
import grid from '../subatomic/grid';
import List from './List';
import Text from '../Text';
import Button from '../Button';

const itemTypes = {
	link: 'link',
	icon: 'icon',
	custom: 'custom'
};

const Footer = ({
	classes,
	columns,
	winWidth,
	bottomLinks,
	copyText,
	aux
}) => {
	const { text, icon, href, target, iconRight } = aux;
	const isMobile = winWidth < grid.sm;

	return (
		<div
			className={
				columns.length > 0 ? classes.footer : classes.footerWithoutColumns
			}
		>
			<Grid fluid={winWidth < grid.xl}>
				<Grid.Row>
					<Flexbox
						display="flex"
						direction={isMobile ? 'col' : 'row'}
						className={classes.column}
					>
						{columns.map((column, index) => (
							<Flexbox key={index} flex="1">
								{column.map(list => (
									<List list={list} isMobile={isMobile} key={list.key} />
								))}
							</Flexbox>
						))}
					</Flexbox>
					<div className={classes.footerBottom}>
						<Flexbox
							display="flex"
							justifyContent="between"
							alignItems="start"
							className={classes.bottomWrap}
							direction={isMobile ? 'col' : 'row'}
						>
							<div>
								<Text small mid bottomTiny tag="div">
									{bottomLinks.map(item => (
										<div
											className={
												isMobile
													? classes.mobileListElement
													: classes.listElement
											}
											key={item.key}
										>
											<Text tag="label" small mid>
												<a
													className={classes.link}
													href={item.href}
													target={item.target}
												>
													{item.text}
												</a>
											</Text>
										</div>
									))}
								</Text>
								{copyText && (
									<Text small mid>
										{copyText}
									</Text>
								)}
							</div>
							{aux && (
								<Button
									href={href}
									target={target}
									icon={icon}
									iconRight={iconRight}
									size="md"
									theme="ghostPink"
									className={isMobile ? classes.buttonMobile : ''}
								>
									{text}
								</Button>
							)}
						</Flexbox>
					</div>
				</Grid.Row>
			</Grid>
		</div>
	);
};

const columnPropTypes = PropTypes.arrayOf(
	PropTypes.arrayOf(
		PropTypes.shape({
			key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
			title: PropTypes.string,
			collapse: PropTypes.bool,
			items: PropTypes.arrayOf(
				PropTypes.shape({
					key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
					type: PropTypes.oneOf([
						itemTypes.link,
						itemTypes.icon,
						itemTypes.custom
					]),
					text: PropTypes.string,
					onClick: PropTypes.func,
					href: PropTypes.string,
					target: PropTypes.string,
					iconName: PropTypes.string,
					custom: PropTypes.node
				})
			)
		})
	)
);

Footer.propTypes = {
	classes: PropTypes.object,
	winWidth: PropTypes.number,
	columns: columnPropTypes,
	bottomLinks: PropTypes.array,
	copyText: PropTypes.string,
	aux: PropTypes.shape({
		text: PropTypes.string,
		icon: PropTypes.string,
		href: PropTypes.string,
		target: PropTypes.string,
		iconRight: PropTypes.string
	})
};

Footer.defaultProps = {
	bottomLinks: [],
	columns: []
};

export default WindowSize(Footer);
