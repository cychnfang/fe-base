import fs from 'fs/promises'
import * as htmlparser2 from 'htmlparser2'

const PLUGIN_NAME = 'vite:svg-icons'

interface SvgIconPluginOptions {
  svgFolder: string
  name: string
}
const insertHtml = `<div>hello world</div>`

const svgIconPlugin = (options: Partial<SvgIconPluginOptions>) => {
  const { svgFolder } = options
  return {
    name: PLUGIN_NAME,
    transformIndexHtml(html) {
      const matched = html.match(/\<body\s?.*\>/)
      const [bodyTag] = matched
      const { index = 0 } = matched

      const startIndex = index + bodyTag.length
      const arr = html.split('')
      arr.splice(startIndex, 0, ...insertHtml.split(''))
      return arr.join('')
    }
  }
}
export default svgIconPlugin
