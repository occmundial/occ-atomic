import { useEffect, useMemo, useState, useRef } from 'react';

export function useOpenTooltipState(openExternal, setOpenExternal, closeDelay) {
	const delay = useThrottle({ trailing: true, leading: false });

	const [openInternal, setOpenInternal] = useState(false);

	const open = useMemo(
		() => openExternal ?? openInternal,
		[openExternal, openInternal]
	);

	const setOpenSource = useMemo(
		() =>
			openExternal !== undefined
				? setOpenExternal ?? (() => {})
				: setOpenInternal,
		[openExternal, setOpenExternal, setOpenInternal]
	);

	const setOpenSourceDelay = useMemo(
		() => show =>
			delay({
				throttleTime: closeDelay,
				callback: () => setOpenSource(show)
			}),
		[closeDelay, setOpenSource, delay]
	);

	function setOpen(open) {
		if (open) {
			delay.cancel();
			setOpenSource(true);
		} else {
			closeDelay > 0 ? setOpenSourceDelay(false) : setOpenSource(false);
		}
	}

	useEffect(() => {
		if (openExternal === false || closeDelay <= 0) return;
		delay.cancel();
		setOpenSourceDelay(false);
	}, [openExternal, setOpenSourceDelay, setOpenSource, delay, closeDelay]);

	return [open, setOpen];
}

export function useThrottle(defaults = {}) {
	const timeout = useRef(null);
	const lastCallback = useRef(null);
	const date = useRef(null);

	function throttle({ callback, throttleTime, leading, trailing }) {
		if (timeout.current) {
			return (lastCallback.current = callback ?? defaults.callback ?? null);
		} else {
			date.current = new Date();
			if (defaults?.leading ?? leading ?? true) {
				callback();
			} else {
				lastCallback.current = callback;
			}
		}
		timeout.current = window.setTimeout(() => {
			defaults?.trailing ?? trailing ? flush() : cancel();
		}, throttleTime ?? defaults.throttleTime ?? 1000);
	}

	function flush() {
		if (!lastCallback.current) return;
		lastCallback.current();
		lastCallback.current = null;
		date.current = null;
		cancel();
	}

	function cancel() {
		if (!timeout.current) return;
		window.clearTimeout(timeout.current);
		timeout.current = null;
		date.current = null;
	}

	useEffect(() => cancel, []);

	throttle.flush = flush;

	throttle.cancel = cancel;

	throttle.date = date;

	throttle.isActive = () => !!date.current;

	return throttle;
}
