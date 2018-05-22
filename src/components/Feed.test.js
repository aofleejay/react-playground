import React from 'react';
import { shallow } from 'enzyme';
import Feed from './Feed';

jest.mock('../components/common', () => ({
  Layout: 'Layout',
  Card: 'Card',
}));

describe('Test Feed component', () => {
  let props;

  beforeEach(() => {
    props = {
      posts: [
        { id: 1, title: 'My Title 1', body: 'My body 1' },
        { id: 2, title: 'My Title 2', body: 'My body 2' },
      ],
      inputText: 'My input text',
      onChangeText: () => {},
      onSubmit: () => {},
    };
  });

  describe('Match its snapshot', () => {
    it('When all props exists', () => {
      const wrapper = shallow(<Feed {...props} />);

      expect(wrapper).toMatchSnapshot();
    });

    it('When no props exists', () => {
      const wrapper = shallow(<Feed />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Test submit form', () => {
    afterEach(() => {
      jest.resetAllMocks();
    });

    it('Should call props onSubmit when click submit button', () => {
      props.onSubmit = jest.fn();
      const wrapper = shallow(<Feed {...props} />);
      wrapper.find('#post-form').simulate('submit');

      expect(props.onSubmit).toHaveBeenCalledTimes(1);
    });

    it('Should call props onChangeText when typing in text input', () => {
      props.onChangeText = jest.fn();
      const wrapper = shallow(<Feed {...props} />);
      wrapper.find('#input-text').simulate('change');

      expect(props.onChangeText).toHaveBeenCalledTimes(1);
    });
  });
});
