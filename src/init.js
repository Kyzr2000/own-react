// 等同于React中的 const element = <div title="标题">这是核心内容</div>
const element = {
  type: 'div',
  props: {
    title: '标题',
    children: '这是核心内容',
  },
}

const container = document.getElementById('root')

// 等同于React中的 ReactDOM.render(element,container)
// 1.创建结点
const node = document.createElement(element.type)
// 2.赋予属性
node['title'] = element.props.title
// 3.定义childern
const text = document.createTextNode('')
text['nodeValue'] = element.props.children
// 4.附加整个element
node.appendChild(text)
container?.appendChild(node)
