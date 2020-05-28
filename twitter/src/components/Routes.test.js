import React from 'react';
import { shallow } from 'enzyme';
import Routes from './Routes';

describe('Test Routes component', () => {
  it('Match its snapshot', () => {
    const wrapper = shallow(<Routes />);

    expect(wrapper).toMatchSnapshot();
  });
});
