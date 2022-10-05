import store, { StoreEvents } from "~src/utils/store";
import Block from "~src/utils/block";
import { P } from "~src/types";
import isEqual from "~src/utils/myLodash/isEqual";

export default function withStore(mapStateToProps: (state: any) => any) {


  return function wrap(Component: typeof Block) {
    let previousState: any;

    return class extends Component {

      constructor(props: P) {
        previousState = mapStateToProps(store.getState());

        super({ ...props, ...previousState });
        store.on(StoreEvents.Updated, () => {
          const stateProps = mapStateToProps(store.getState());
          if (!isEqual(previousState, stateProps)) {
            this.setProps({ ...stateProps });
          }
          previousState = stateProps;
        });
      }
    }
  }
}