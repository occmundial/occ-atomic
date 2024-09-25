import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import Flexbox from '../Flexbox';
import Button from '../Button';

const NavAside = ({
	classes,
	top,
	children,
	onClose,
	show,
	onTransitionEnd,
	right
  }) => {
  
	useEffect(() => {
		window.addEventListener('keydown', onKeyDown);
		return () => {
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [onClose]);

	const onKeyDown = useCallback(
		({ code }) => {
		  if (code == ESCAPE) onClose();
		},
		[onClose]
	  );
  
	const avoidClose = useCallback((e) => {
	  e.stopPropagation();
	}, []);
  
	return (
	  <div
		className={`${classes.overlay} ${show ? classes.overlayShow : classes.overlayHide}`}
		onClick={onClose}
		onTransitionEnd={onTransitionEnd}
	  >
		<div
			className={`${classes.block} ${
				show ?
					(right ? classes.showRight : classes.showLeft) :
					(right ? classes.hideRight : classes.hideLeft)
			}`}
			onClick={avoidClose}
		>
		  <Card raised className={classes.card}>
			<Flexbox
			  display="flex"
			  justifyContent="end"
			  alignItems="start"
			  className={classes.top}
			>
			  {top && (
				<Flexbox flex="1" className={classes.topContent}>
				  {top}
				</Flexbox>
			  )}
			  <Button theme="ghostGrey" icon="x" size="md" onClick={onClose} />
			</Flexbox>
			<div className={classes.content}>{children}</div>
		  </Card>
		</div>
	  </div>
	);
  };

NavAside.propTypes = {
	classes: PropTypes.object.isRequired,
	/** Will display any element in the top position */
	top: PropTypes.node,
	/** Will display any element in the bottom position */
	children: PropTypes.node,
	/** Custome function for closing aside */
	onClose: PropTypes.func,
	/** Boolean value to show or hide the Aside component. */
	show: PropTypes.bool,
	/** This function is used by an internal wrapper component to manage the hiding animation and unmounting properly. */
	onTransitionEnd: PropTypes.func,
	/** Boolean value to show the Aside component in the right side */
	right: PropTypes.bool
};

export default NavAside;
