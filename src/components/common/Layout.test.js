import React from 'react';
import { shallow } from 'enzyme';
import Layout, { Navbar } from './Layout';

describe('Test layout ui structure', () => {
  describe('Match its snapshot', () => {
    it('When all props exists', () => {
      const Child = () => <p>child component.</p>;

      const wrapper = shallow(<Layout><Child /></Layout>);

      expect(wrapper).toMatchSnapshot();
    });

    it('When no props exists', () => {
      const wrapper = shallow(<Layout />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});

describe('Test Navbar styled-components', () => {
  it('Match its snapshot', () => {
    const wrapper = shallow(<Navbar />);
  
    expect(wrapper).toMatchSnapshot();
  });
})
