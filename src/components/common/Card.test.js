import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Test card ui structure', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      title: 'Lorem',
      body: 'Ipsum.',
    };

    wrapper = shallow(<Card {...props} />);
  });

  it('Should render correct card title', () => {
    const cardTitle = wrapper.find('#card-title');

    expect(cardTitle).toHaveLength(1);
    expect(cardTitle.props()).toHaveProperty('children', 'Lorem');
  });

  it('Should contain correct card-body', () => {
    const cardBody = wrapper.find('#card-body');

    expect(cardBody).toHaveLength(1);
    expect(cardBody.props()).toHaveProperty('children', 'Ipsum.');
  });

  describe('Match its snapshot', () => {
    it('When all props exists', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('When no props exists', () => {
      wrapper = shallow(<Card />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
