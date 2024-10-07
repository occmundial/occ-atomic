import React, { cloneElement, Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import {
  useFloating,
  autoUpdate,
  offset,
  shift,
  useDismiss,
  useRole,
  useClick,
  useInteractions,
  FloatingFocusManager,
  FloatingPortal
} from '@floating-ui/react';

export default function Menu({
  children,
  id,
  classes,
  className,
  triggerElement,
  placement
}) {
  const [open, setOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: placement,
    middleware: [offset(16), shift()],
    whileElementsMounted: autoUpdate
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role
  ]);

  return (
    <Fragment>
      {triggerElement
        ? cloneElement(triggerElement, {
            ref: refs.setReference,
            ...getReferenceProps()
          })
        : ''}
      {open && (
        <FloatingPortal>
          <FloatingFocusManager context={context} modal={false}>
            <div
              className={`${classes.contentWrapper}${
                className ? ` ${className}` : ''
              }`}
              id={id}
              ref={refs.setFloating}
              style={floatingStyles}
              {...getFloatingProps()}
            >
              {children}
            </div>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </Fragment>
  );
}

Menu.defaultProps = {
  placement: 'left'
};

Menu.propTypes = {
  classes: PropTypes.object,
  /** React element to render inside the Menu. */
  children: PropTypes.node,
  /** React element that triggers the Menu status. */
  triggerElement: PropTypes.node,
  /** Boolean value to show or hide the Menu component. */
  open: PropTypes.bool,
  /** Id that sets to Children container */
  id: PropTypes.string,
  /** Adds root container classes.  */
  className: PropTypes.string,
  /** Determines the placement of the Menu */
  placement: PropTypes.oneOf(["top", "right", "bottom", "left", "top-start", "top-end", "right-start", "right-end", "bottom-start", "bottom-end", "left-start", "left-end"])
};
