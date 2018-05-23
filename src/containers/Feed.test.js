import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import axios from 'axios';
import Feed from './Feed';

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
      wrapper = shallow(<Feed />, { disableLifecycleMethods: true });
      expect(wrapper.state()).toHaveProperty('posts', []);
    });

    it('Should have state inputText is empty string', () => {
      expect(wrapper.state()).toHaveProperty('inputText', '');
    });
  });

  describe('Test componentDidMount', () => {
    let mockFetchPosts

    afterEach(() => {
      mockFetchPosts.restore()
    })

    it('Should call fetchPosts', () => {
      const wrapper = shallow(<Feed />, { disableLifecycleMethods: true });
      const instance = wrapper.instance();
      mockFetchPosts = sinon.mock(instance).expects('fetchPosts').once();

      instance.componentDidMount();

      mockFetchPosts.verify()
    });
  });

  describe('Test fetchPosts', () => {
    afterEach(() => {
      sinon.restore();
    });

    it('Should setState with new posts when axios.get resolved', () => {
      const wrapper = shallow(<Feed />, { disableLifecycleMethods: true });
      const instance = wrapper.instance();
      const mockGet = sinon.mock(axios)
        .expects('get')
        .once()
        .withExactArgs('http://localhost:5000/posts?_sort=id&_order=desc')
        .resolves({ data: [] });
      const mockSetState = sinon.mock(instance)
        .expects('setState')
        .once()
        .withExactArgs({ posts: [] });

      return instance.fetchPosts()
        .then(() => {
          mockGet.verify()
          mockSetState.verify()
        });
    });

    it('Should setState with error when axios.get rejected', () => {
      const wrapper = shallow(<Feed />, { disableLifecycleMethods: true });
      const instance = wrapper.instance();
      const error = new Error('Whoops.')
      const mockGet = sinon.mock(axios)
        .expects('get')
        .once()
        .withExactArgs('http://localhost:5000/posts?_sort=id&_order=desc')
        .rejects(error);
      const mockSetState = sinon.mock(instance)
        .expects('setState')
        .once()
        .withExactArgs({ error });

      return instance.fetchPosts()
        .then((response) => {
          mockGet.verify()
          mockSetState.verify()
        });
    });
  });

  describe('Test function onSubmit', () => {
    afterEach(() => {
      sinon.restore();
    });

    it('Should call setState with new input text value', () => {
      const event = { target: { text: { value: 'new value' } }, preventDefault: sinon.spy() };
      const wrapper = shallow(<Feed />, { disableLifecycleMethods: true });
      const instance = wrapper.instance();
      const mockCreatePost = sinon.mock(instance)
        .expects('createPost')
        .once()
        .withExactArgs({ body: 'new value' });

      instance.onSubmit(event);

      expect(event.preventDefault.callCount).toEqual(1);
      mockCreatePost.verify();
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
