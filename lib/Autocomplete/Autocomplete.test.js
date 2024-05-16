import React from 'react';
import { shallow, mount } from 'enzyme';
import Autocomplete from './Autocomplete';
import styles from './styles';
import AutocompleteJSS from './index';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });
const classes = Object.keys(styles).reduce(reduceClasses, {});

const items = [
  { text: 'Administrador', textRight: '(222)', id: 1 },
  { text: 'Administrador Sr', textRight: '(134)', id: 2 },
  { text: 'Administrador Jr', textRight: '(52)', id: 3 },
  { text: 'Administrar', textRight: '(6)', id: 4 }
];

describe('Autocomplete', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(
      <Autocomplete droplistProps={{ items }} classes={classes} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the input and droplist', () => {
    const wrapper = mount(
      <Autocomplete
        textfieldProps={{ valueProp: 'a', className: 'input' }}
        droplistProps={{ items, className: 'droplist' }}
        classes={classes}
      />
    );
    wrapper.setState({ focus: true });
    expect(wrapper.find('.input').at(0).length).toBe(1);
    expect(wrapper.find('.droplist').at(0).length).toBe(1);
  });

  it("hides the droplist when there's no value or the input has no focus", () => {
    const wrapper = mount(
      <Autocomplete
        textfieldProps={{ valueProp: 'a', className: 'input' }}
        droplistProps={{ items, className: 'droplist' }}
        classes={classes}
      />
    );
    wrapper.setState({ focus: true });
    expect(wrapper.find('.droplist').at(0).length).toBe(1);
    wrapper.setState({ focus: false });
    expect(wrapper.find('.droplist').at(0).length).toBe(0);
    wrapper.setState({ focus: true, value: '' });
    expect(wrapper.find('.droplist').at(0).length).toBe(0);
  });

  it('filters the items of the droplist using the input value', () => {
    const wrapper = mount(
      <Autocomplete
        textfieldProps={{ className: 'input' }}
        droplistProps={{ items, className: 'droplist' }}
        classes={classes}
      />
    );
    wrapper.setState({ focus: true, value: 'a' });
    expect(wrapper.find('.droplist').at(0).text()).toBe(
      'Administrador(222)Administrador Sr(134)Administrador Jr(52)Administrar(6)'
    );
    wrapper.setState({ value: 'administrador' });
    expect(wrapper.find('.droplist').at(0).text()).toBe(
      'Administrador(222)Administrador Sr(134)Administrador Jr(52)'
    );
  });

  it('returns the input value', () => {
    const onChange = jest.fn();
    const wrapper = mount(
      <Autocomplete
        onChange={onChange}
        textfieldProps={{ className: 'input' }}
        droplistProps={{ items, className: 'droplist' }}
        classes={classes}
      />
    );
    wrapper.find('input').simulate('change', { target: { value: 'a' } });
    expect(onChange.mock.calls[0][0]).toBe('a');
    wrapper.find('input').simulate('change', { target: { value: 'ad' } });
    expect(onChange.mock.calls[1][0]).toBe('ad');
  });

  it('returns the object of the selected item', () => {
    const onMouseDown = jest.fn();
    const wrapper = mount(
      <Autocomplete
        onMouseDown={onMouseDown}
        textfieldProps={{ valueProp: 'a', className: 'input' }}
        droplistProps={{
          items,
          className: 'droplist',
          testId: 'test-component'
        }}
        classes={classes}
      />
    );
    wrapper.setState({ focus: true });
    wrapper.find({ "data-testid": 'test-component__droplist-item-0'}).simulate('mousedown');
    expect(onMouseDown.mock.calls[0][0]).toEqual({
      id: 1,
      text: 'Administrador',
      textRight: '(222)'
    });
    wrapper.setState({ focus: true, value: 'a' });
    wrapper.find({ "data-testid": 'test-component__droplist-item-1'}).simulate('mousedown');
    expect(onMouseDown.mock.calls[1][0]).toEqual({
      id: 2,
      text: 'Administrador Sr',
      textRight: '(134)'
    });
  });

  it('calls the onChange function', () => {
    const onChange = jest.fn();
    const wrapper = mount(
      <Autocomplete
        onChange={onChange}
        textfieldProps={{ valueProp: 'a', className: 'input' }}
        droplistProps={{ items, className: 'droplist' }}
        classes={classes}
      />
    );
    wrapper.find('input').simulate('change', { target: { value: 'a' } });
    expect(onChange.mock.calls.length).toBe(1);
  });

  it('calls the onMouseDown function', () => {
    const onMouseDown = jest.fn();
    const wrapper = mount(
      <Autocomplete
        onMouseDown={onMouseDown}
        textfieldProps={{ valueProp: 'a', className: 'input' }}
        droplistProps={{ items, className: 'droplist', testId: "test-component" }}
        classes={classes}
      />
    );
    wrapper.setState({ focus: true });
    wrapper.find({ "data-testid": 'test-component__droplist-item-0'}).simulate('mousedown');
    expect(onMouseDown.mock.calls.length).toBe(1);
  });

  it('calls the onFocus function', () => {
    const onFocus = jest.fn();
    const wrapper = mount(
      <Autocomplete
        onFocus={onFocus}
        textfieldProps={{ valueProp: 'a', className: 'input' }}
        droplistProps={{ items, className: 'droplist' }}
        classes={classes}
      />
    );
    wrapper.find('input').simulate('focus');
    expect(onFocus.mock.calls.length).toBe(1);
  });

  it('calls the onBlur function', () => {
    const onBlur = jest.fn();
    const wrapper = mount(
      <Autocomplete
        onBlur={onBlur}
        textfieldProps={{ valueProp: 'a', className: 'input' }}
        droplistProps={{ items, className: 'droplist' }}
        classes={classes}
      />
    );
    wrapper.find('input').simulate('blur');
    expect(onBlur.mock.calls.length).toBe(1);
  });
});

describe('AutocompleteJSS', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(
      <AutocompleteJSS droplistProps={{ items }} items={items} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Autocomplete styles', () => {
  it('matches the snapshot', () => {
    expect(styles).toMatchSnapshot();
  });
});
