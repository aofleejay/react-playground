import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import Feed from './Feed';

jest.mock('../components/Feed', () => 'Feed');
jest.mock('axios');

describe('Test Feed component', () => {
  it('Match its snapshot', () => {
    const wrapper = shallow(<Feed />, { disableLifecycleMethods: true });

    expect(wrapper).toMatchSnapshot();
  });

  describe('Test initial state', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Feed />, { disableLifecycleMethods: true });
    });

    it('Should have state posts is empty array', () => {
      expect(wrapper.state()).toHaveProperty('posts', []);
    });

    it('Should have state inputText is empty string', () => {
      expect(wrapper.state()).toHaveProperty('inputText', '');
    });
  });

  describe('Test componentDidMount', () => {
    it('Should call fetchPosts', () => {
      const wrapper = shallow(<Feed />, { disableLifecycleMethods: true });
      const instance = wrapper.instance();
      const mockFetchPosts = jest.spyOn(instance, 'fetchPosts').mockImplementation(() => {});

      instance.componentDidMount();

      expect(mockFetchPosts).toHaveBeenCalledTimes(1);
    });
  });

  describe('Test fetchPosts', () => {
    afterEach(() => {
      jest.resetAllMocks();
    });

    it('Should setState with new posts when axios.get resolved', () => {
      const wrapper = shallow(<Feed />, { disableLifecycleMethods: true });
      const instance = wrapper.instance();
      const mockSetState = jest.spyOn(instance, 'setState').mockImplementation(() => {});
      const mockGet = axios.get.mockReturnValue(Promise.resolve({ data: [] }));

      return instance.fetchPosts()
        .then((response) => {
          expect(mockGet).toHaveBeenCalledTimes(1);
          expect(mockGet).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts');
          expect(mockSetState).toHaveBeenCalledTimes(1);
          expect(mockSetState).toHaveBeenCalledWith({ posts: [] });
        });
    });

    it('Should setState with error when axios.get rejected', () => {
      const wrapper = shallow(<Feed />, { disableLifecycleMethods: true });
      const instance = wrapper.instance();
      const mockSetState = jest.spyOn(instance, 'setState').mockImplementation(() => {});
      const mockGet = axios.get.mockReturnValue(Promise.reject(new Error('Whoops.')));

      return instance.fetchPosts()
        .then((response) => {
          expect(mockGet).toHaveBeenCalledTimes(1);
          expect(mockGet).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts');
          expect(mockSetState).toHaveBeenCalledTimes(1);
          expect(mockSetState).toHaveBeenCalledWith({ error: new Error('Whoops.') });
        });
    });
  });

  describe('Test function onSubmit', () => {
    afterEach(() => {
      jest.resetAllMocks();
    });

    it('Should call setState with new input text value', () => {
      const event = { target: { text: { value: 'new value' } }, preventDefault: jest.fn() };
      const wrapper = shallow(<Feed />, { disableLifecycleMethods: true });
      const instance = wrapper.instance();

      instance.onSubmit(event);

      expect(event.preventDefault).toHaveBeenCalledTimes(1);
    });
  });

  describe('Test function onChangeText', () => {
    afterEach(() => {
      jest.resetAllMocks();
    });

    it('Should call setState with new input text value', () => {
      const event = { target: { value: 'new value' } };
      const wrapper = shallow(<Feed />, { disableLifecycleMethods: true });
      const instance = wrapper.instance();
      const mockSetState = jest.spyOn(instance, 'setState').mockImplementation(() => {});

      instance.onChangeText(event);

      expect(mockSetState).toHaveBeenCalledTimes(1);
      expect(mockSetState).toHaveBeenCalledWith({ inputText: 'new value' });
    });
  });
});
