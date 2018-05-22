import React from 'react';
import { shallow } from 'enzyme';
import Layout, { Navbar } from './Layout';

jest.mock('react-router-dom', () => ({
  Link: () => 'Link',
}));

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

it('asd', () => {
  const wrapper = shallow(<Navbar />);

  expect(wrapper).toMatchSnapshot();
});
