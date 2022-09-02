import Button from "~src/components/base/button";
import Block from "~src/utils/block";

const guestLayoutTemplate = `
  <div class='guest-layout'>
    <h1>{{header}}</h1>
    {{content}}
  </div>
`;
export type TLayout = {
  header?: string
  content?: string
}

export class GuestLayout extends Block {
  // constructor({ children }: TLayout) {
  //   super({children})

  constructor(props: TLayout) {
    super("div", props as any);

    // this.children.button = new Button({
    //   text: this.props.buttonText
    // });
    console.log('props', props)
  }
  init() {
    let count = 0
    const changeNameBtn = () => {
      this.children.content.setProps({text: `name ${count++}`  })
      this.setProps({header:`name ${count++}`})
    }
    this.children.content = new Button({
      text: 'Click me',
      events: {
        click: changeNameBtn
      }
    });
    

  }


  // componentDidUpdate(oldProps: P, newProps: P) {
  //   if (oldProps.buttonText !== newProps.buttonText) {
  //     this.children.button.setProps({ text: newProps.buttonText });
  //   }

  //   return true;
  // }
  render() {
    // return this.compile(guestLayoutTemplate, {
    //   content: this.props.button,
    // }) ;
    return this.compile(guestLayoutTemplate, { ...this.props }) ;
  } 
}
