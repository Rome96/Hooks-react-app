import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import AppHook from '../AppHook';

describe("Testing component <AppHook/> ", () => {

  test("return component <AppHook/> Snapshot", () => {
    const wrapper = shallow(<AppHook/>);
    expect(wrapper).toMatchSnapshot();
  });

});
