import { type App, type Slot, type Component } from 'vue'
import { createApp, h, render } from 'vue'
import Dialog from './index.vue'

// export default async function FeDialog(): Promise<any> {
//   return new Promise((resolve, reject) => {
//     let mountNode = document.createElement('div')
//     let dialogApp: App<Element> | undefined = createApp(Dialog, {
//       visible: true,
//       close: () => {
//         if (dialogApp) {
//           dialogApp.unmount()
//           document.body.removeChild(mountNode)
//           dialogApp = undefined
//           reject('close')
//         }
//       },
//       confirm: (res: any) => {
//         console.log(res, '---')
//         resolve(res)
//         dialogApp?.unmount()
//         document.body.removeChild(mountNode)
//         dialogApp = undefined
//       }
//     })
//     document.body.appendChild(mountNode)
//     dialogApp.mount(mountNode)
//   })
// }

// export default async function FeDialog(children: {
//   [slot: string]: Component
// }): Promise<Number> {
//   return new Promise((resolve, reject) => {
//     let mountNode: HTMLDivElement | null = document.createElement('div')

//     const slots = Object.keys(children).reduce(
//       (solts: { [name: string]: Component }, cur) => {
//         solts[cur] = () => children[cur]
//         return solts
//       },
//       {}
//     )

//     const VNode = h(
//       Dialog,
//       {
//         visible: true,
//         close: () => {
//           reject('close')
//           if (mountNode) {
//             document.body.removeChild(mountNode)
//             mountNode = null
//           }
//         },
//         confirm: (res: number) => {
//           resolve(res)
//           if (mountNode) {
//             document.body.removeChild(mountNode)
//             mountNode = null
//           }
//         }
//       },
//       slots
//     )
//     render(VNode, mountNode)
//     document.body.appendChild(mountNode)
//   })
// }

export default a
