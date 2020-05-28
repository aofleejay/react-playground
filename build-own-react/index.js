import React2 from './react2'

const container = document.querySelector('#root')

/** @jsx React2.createElement */
const element = <h1>Hellow</h1>

React2.render(element, container)
