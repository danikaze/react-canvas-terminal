import Reconciler from 'react-reconciler';
import { hostConfig } from './host-config';

const reconciler = Reconciler(hostConfig);

const ReactCanvas = {
  render(element, canvas, callback?) {
    // if (!(canvas instanceof HTMLCanvasElement)) {
    //   throw new Error('element needs to be HTMLCanvasElement');
    // }
    // tslint:disable-next-line: no-console
    console.log('render called', element, canvas, callback);

    const isAsync = false;
    const hydrate = false;
    const container = reconciler.createContainer(canvas, isAsync, hydrate);
    const parentComponent = null; // root component

    reconciler.updateContainer(element, container, parentComponent, callback);
  },
};

export default ReactCanvas;
