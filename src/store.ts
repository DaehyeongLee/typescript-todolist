import { createStore, createTypedHooks, persist  } from 'easy-peasy';
import model, { StoreModel } from "./model";

const { useStoreActions, useStoreState, useStoreDispatch } = createTypedHooks<StoreModel>();

export { useStoreActions, useStoreState, useStoreDispatch };

const store = createStore(persist(model));

export default store;