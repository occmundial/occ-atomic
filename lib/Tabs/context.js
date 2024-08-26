import React, {
  createContext,
  useContext,
  useState
} from 'react';
import PropTypes from 'prop-types';

const initialContext = {
  currentValue: 0,
  setCurrentValue: () => {},
  initialize: false
};

const TabsContext = createContext(initialContext);

export function TabsProviderUncontrolled(props) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <TabsContext.Provider
      value={{
        currentValue: currentTabIndex,
        setCurrentValue: setCurrentTabIndex,
        initialize: true
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {props.children}
      </div>
    </TabsContext.Provider>
  );
}

TabsProviderUncontrolled.propTypes = {
  children: PropTypes.node
};

export function TabsProviderControlled(props) {
  return (
    <TabsContext.Provider
      value={{
        currentValue: props.value,
        setCurrentValue: props.setCurrentValue,
        initialize: true
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {props.children}
      </div>
    </TabsContext.Provider>
  );
}

TabsProviderControlled.propTypes = {
  children: PropTypes.node,
  value: PropTypes.oneOf([
    PropTypes.number,
    PropTypes.string
  ]),
  setCurrentValue: PropTypes.func,
};


export function useTabsContext() {
  const context = useContext(TabsContext);
  if (context.initialize === false) {
    throw new Error('useTabsContext must be used within a TabsProvider');
  }
  return context;
}
