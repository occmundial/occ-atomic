import { useEffect, useCallback, useMemo, useState, useRef } from 'react';

export function useOpenTooltipState(
	openExternal,
	setOpenExternal,
	closeDelay
  ) {
	const { throttle, cancel } = useThrottle({ trailing: true, leading: false })
  
	const [openInternal, setOpenInternal] = useState(false)
  
	const open = useMemo(
	  () => openExternal ?? openInternal,
	  [openExternal, openInternal]
	)
  
	const setOpenSource = useMemo(
	  () =>
		openExternal !== undefined
		  ? setOpenExternal ?? (() => {})
		  : setOpenInternal,
	  [openExternal, setOpenExternal, setOpenInternal]
	)
  
	const setOpenSourceDelay = useCallback(
	  (show) => {
		throttle({
		  throttleTime: closeDelay,
		  callback: () => setOpenSource(show)
		})
	  },
	  [closeDelay, setOpenSource, throttle]
	)
  
	function setOpen(openValue) {
	  if (openValue) {
		if (open) cancel()
		setOpenSource(true)
	  } else {
		closeDelay > 0 ? setOpenSourceDelay(false) : setOpenSource(false)
	  }
	}
  
	useEffect(() => {
	  if (closeDelay <= 0) return
	  if (openExternal === false) {
		cancel()
	  } else {
		setOpenSourceDelay(false)
	  }
	}, [openExternal, setOpenSourceDelay, setOpenSource, closeDelay, cancel])
  
	return [open, setOpen]
  }

export function useThrottle(defaults = {}) {
	const timeout = useRef(null)
	const lastCallback = useRef(null)
	const date = useRef(null)
  
	const cancel = useCallback(() => {
	  if (!timeout.current) return
	  window.clearTimeout(timeout.current)
	  timeout.current = null
	  date.current = null
	}, [])
  
	const flush = useCallback(() => {
	  if (!lastCallback.current) return
	  lastCallback.current()
	  lastCallback.current = null
	  date.current = null
	  cancel()
	}, [cancel])
  
	const throttle = useCallback(
	  ({ callback, throttleTime, leading, trailing }) => {
		if (timeout.current) {
		  return (lastCallback.current = callback ?? defaults.callback ?? null)
		} else {
		  date.current = new Date()
		  if (defaults?.leading ?? leading ?? true) {
			callback()
		  } else {
			lastCallback.current = callback
		  }
		}
		timeout.current = window.setTimeout(() => {
		  defaults?.trailing ?? trailing ? flush() : cancel()
		}, throttleTime ?? defaults.throttleTime ?? 1000)
	  },
	  [
		cancel,
		defaults.callback,
		defaults?.leading,
		defaults.throttleTime,
		defaults?.trailing,
		flush
	  ]
	)
  
	useEffect(() => cancel, [cancel])
  
	return {
	  throttle,
	  flush,
	  cancel,
	  isActive: () => !!date.current,
	  date
	}
  }
