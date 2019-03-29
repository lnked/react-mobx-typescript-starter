import { configure } from 'mobx'

import { enableLogging } from 'mobx-logger'

import {
  UiStore,
  AppStore,
} from './providers'

import {
  STORE_UI,
  STORE_APP,
  STORE_ROUTER,
  environment,
} from 'settings'

configure({
  enforceActions: 'observed', // 'never' | 'always' | 'observed'
})

enableLogging({
  predicate: () => environment.development && Boolean(window.navigator.userAgent),
  action: true,
  reaction: false,
  transaction: false,
  compute: false,
})

export const createStore = (routerStore?: any) => {
  const initialState = (window && window.__INITIAL_STATE__) || {}

  const { ui, app } = initialState

  const uiStore = new UiStore(ui)
  const appStore = new AppStore(app)

  Reflect.deleteProperty(window, '__INITIAL_STATE__')

  return {
    [STORE_UI]: uiStore,
    [STORE_APP]: appStore,
    [STORE_ROUTER]: routerStore,
  }
}