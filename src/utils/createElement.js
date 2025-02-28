// 创建结点（组件）
// 标签类型、属性（参数）、标签下的子节点
export default function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((item) =>
        typeof item === 'object' ? item : createTextElement(item)
      ),
    },
  }
}

// 创建纯文本的节点
function createTextElement(text) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: [],
    },
  }
}
