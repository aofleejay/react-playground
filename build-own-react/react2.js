function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((c) => {
        return typeof c === 'object' ? c : createTextElement(c)
      }),
    },
  }
}

function createTextElement(text) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: [],
    },
  }
}

function render(element, container) {
  const component =
    element.type == 'TEXT_ELEMENT'
      ? document.createTextNode('')
      : document.createElement(element.type)

  const isProperty = (key) => key !== 'children'
  Object.keys(element.props)
    .filter(isProperty)
    .forEach((name) => {
      component[name] = element.props[name]
    })

  element.props.children.forEach((child) => render(child, component))

  container.appendChild(component)
}

const React2 = { createElement, render }

export default React2
