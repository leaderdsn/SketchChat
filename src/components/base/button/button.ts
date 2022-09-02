import Block from '~src/utils/block';
//import { TButton } from "./types";


// export class Button extends Block {
//   constructor({ text, click}: TButton) {
//     super({text, events: {click: click}})
//   }
//   protected render(): string {
//     return `
//       <button 
//         id='{{id}}' 
//         class='{{className}}' 
//         type='{{typeButton}}' 
//         onclick='{{click}}'
//       >
//         {{text}}
//       </button>
//     `
//   } 
// }
// const template = `
//   <button 
//     id='{{id}}' 
//     class='{{className}}' 
//     type='{{typeButton}}' 
//     onclick='{{click}}'
//   >
//     {{text}}
//   </button>
// `
const template = `
  <button>
    {{text}}
  </button>
`

type TButtonProps = {
  text: string,
  events: {
    click: () => void
  }
}

type P = any
export default class Button extends Block<TButtonProps> {
  constructor(props: TButtonProps) {
    // Создаём враппер DOM-элемент button
    super("button", props as P);
  }
  //@ts-ignore
  render() {
    // В данном случае render возвращает строкой разметку из шаблонизатора
    return this.compile(template, this.props);
  }
} 