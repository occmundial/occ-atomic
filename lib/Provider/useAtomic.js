import { useContext } from 'react';
import { AtomicContext } from './Provider';

const useAtomic = () => {
  return useContext(AtomicContext);
};

export default useAtomic;
