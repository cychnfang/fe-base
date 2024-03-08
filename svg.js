import * as htmlparser2 from 'htmlparser2'

const svgIconPlugin = () => {
  return {
    name: 'vite:svg-icons',
    transform(code, id) {
      if (id.endsWith('.vue')) {
        const codeArr = code.split('\n')
        codeArr.forEach((codeItemStr) => {})
        console.log(codeArr, '---')
        return {
          code: '<template><div>1231</div></template>'
        }
      }

      return {
        code
      }

      // 校验是否是.vue 文件
      // 匹配出svg-icon 中的 name 属性
      // 根据name属性 加载配置的文件下的svg图片
      // 将文件读取缓存
      // 将svg源码组装成
      // <svg>
      //  <simple id="`${filename}`"></simple>
      // </svg>
    }
  }
}

export default svgIconPlugin
