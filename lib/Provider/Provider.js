import React, {
  createContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from 'react';
import isEqual from 'lodash/isEqual';
import usePrevious from './usePrevious';

const AtomicContext = createContext({});

const loadSprite = (url) => {
  fetch(url).then(res => {
    return res.text();
  })
  .then(data => {
    const div = document.createElement('div');
    div.style.display = 'none';
    div.innerHTML = data;
    document.body.insertBefore(div, document.body.firstChild);
  })
  .catch(console.log);
};

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

// eslint-disable-next-line react/prop-types
function AtomicProvider({ data, children }) {
  const [value, setValue] = useState({
    iconsUrl: '',
    iconsPath: '',
    iconsPrefix: 'atomic',
    ...data
  });
  const valueRef = useRef();
  const prevData = usePrevious(data);

  useIsomorphicLayoutEffect(() => {
    valueRef.current = value;
  }, [value]);

  useIsomorphicLayoutEffect(() => {
    if (prevData && !isEqual(prevData, data)) {
      setValue({ ...valueRef.current, ...data });
    }
  }, [data, prevData]);

  useIsomorphicLayoutEffect(() => {
    if (value.iconsUrl) loadSprite(value.iconsUrl);
  }, [value.iconsUrl]);

  return (
    <AtomicContext.Provider value={value}>{children}</AtomicContext.Provider>
  );
};

export { AtomicContext };
export default AtomicProvider;