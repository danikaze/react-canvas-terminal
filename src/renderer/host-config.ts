/* tslint:disable:no-console no-any */
import * as ReactReconciler from 'react-reconciler';

type Type = unknown;
type Props = unknown;
type Container = unknown;
type Instance = unknown;
type TextInstance = unknown;
type HydratableInstance = unknown;
type PublicInstance = unknown;
type HostContext = unknown;
type UpdatePayload = unknown;
type ChildSet = unknown;
type TimeoutHandle = number;
type NoTimeout = number;

/**
 *
 */
function getPublicInstance(instance: Instance | TextInstance): PublicInstance {
  console.log('getPublicInstance', instance);
  return instance;
}

/**
 *
 */
function getRootHostContext(rootContainerInstance: Container): HostContext {
  console.log('getRootHostContext', rootContainerInstance);
  return {};
}

/**
 *
 */
function getChildHostContext(
  parentHostContext: HostContext,
  type: Type,
  rootContainerInstance: Container
): HostContext {
  console.log(
    'getChildHostContext',
    parentHostContext,
    type,
    rootContainerInstance
  );
  return {
    type,
  };
}

/**
 *
 */
function prepareForCommit(containerInfo: Container): void {
  console.log('prepareForCommit', containerInfo);
}

/**
 *
 */
function resetAfterCommit(containerInfo: Container): void {
  console.log('resetAfterCommit', containerInfo);
}

/**
 *
 */
function createInstance(
  type: Type,
  props: Props,
  rootContainerInstance: Container,
  hostContext: HostContext,
  internalInstanceHandle: ReactReconciler.Fiber
): Instance {
  console.log(
    'createInstance',
    type,
    props,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle
  );
  return { type, props };
}

/**
 *
 */
function appendInitialChild(
  parentInstance: Instance,
  child: Instance | TextInstance
): void {
  console.log('appendInitialChild', parentInstance, child);
}

/**
 *
 */
function finalizeInitialChildren(
  parentInstance: Instance,
  type: Type,
  props: Props,
  rootContainerInstance: Container,
  hostContext: HostContext
): boolean {
  console.log(
    'finalizeInitialChildren',
    parentInstance,
    type,
    props,
    rootContainerInstance,
    hostContext
  );
  return;
}

/**
 *
 */
function prepareUpdate(
  instance: Instance,
  type: Type,
  oldProps: Props,
  newProps: Props,
  rootContainerInstance: Container,
  hostContext: HostContext
): null | UpdatePayload {
  console.log(
    'prepareUpdate',
    instance,
    type,
    oldProps,
    newProps,
    rootContainerInstance,
    hostContext
  );
  return null;
}

/**
 *
 */
function shouldSetTextContent(type: Type, props: Props): boolean {
  console.log('shouldSetTextContent', type, props);
  return false;
}

/**
 *
 */
function shouldDeprioritizeSubtree(type: Type, props: Props): boolean {
  console.log('shouldDeprioritizeSubtree', type, props);
  return false;
}

/**
 *
 */
function createTextInstance(
  text: string,
  rootContainerInstance: Container,
  hostContext: HostContext,
  internalInstanceHandle: ReactReconciler.Fiber
): TextInstance {
  console.log(
    'createTextInstance',
    text,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle
  );
  return text;
}

/**
 *
 */
function scheduleDeferredCallback(
  callback: () => any,
  options?: { timeout: number }
): any {
  console.log('scheduleDeferredCallback', callback, options);
  return;
}

/**
 *
 */
function cancelDeferredCallback(callbackID: any): void {
  console.log('cancelDeferredCallback', callbackID);
  return;
}

// -------------------
//      Mutation
//     (optional)
// -------------------

function appendChildToContainer(
  container: Container,
  child: Instance | TextInstance
): void {
  console.log('appendChildToContainer', container, child);
}

//

const setTimeout = window.setTimeout;
const clearTimeout = window.clearTimeout;
const noTimeout = -1;
const now = Date.now;

// Temporary workaround for scenario where multiple renderers concurrently
// render using the same context objects. E.g. React DOM and React ART on the
// same page. DOM is the primary renderer; ART is the secondary renderer.
const isPrimaryRenderer = true;

const supportsMutation = true;
const supportsPersistence = true;
const supportsHydration = false;

export const hostConfig: ReactReconciler.HostConfig<
  Type,
  Props,
  Container,
  Instance,
  TextInstance,
  HydratableInstance,
  PublicInstance,
  HostContext,
  UpdatePayload,
  ChildSet,
  TimeoutHandle,
  NoTimeout
> = {
  getPublicInstance,
  getRootHostContext,
  getChildHostContext,
  prepareForCommit,
  resetAfterCommit,
  createInstance,
  appendInitialChild,
  finalizeInitialChildren,
  prepareUpdate,
  shouldSetTextContent,
  shouldDeprioritizeSubtree,
  createTextInstance,
  scheduleDeferredCallback,
  cancelDeferredCallback,
  setTimeout,
  clearTimeout,
  noTimeout,
  now,
  isPrimaryRenderer,
  supportsMutation,
  supportsPersistence,
  supportsHydration,

  // mutation
  appendChildToContainer,
};
