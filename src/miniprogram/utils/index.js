/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable func-call-spacing */
/* eslint-disable prefer-rest-params */
const guid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0
    const v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}
export default guid

export const throttle = (fn, wait) => {
  let timeout
  return function () {
    const context = this
    const args = arguments
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null
        fn.apply(context, args)
      })
    }
  }
}

export const debounce = (func, wait, immediate) => {
  let timeout
  return function () {
    const context = this
    const args = arguments
    if (immediate) {
      const callNow = !timeout
      timeout = setTimeout (() => {
        timeout = null
      })
      if (callNow) func.apply(this, args)
    } else {
      timeout = setTimeout(() => {
        func.apply(context, args)
      }, wait)
    }
  }
}

export class EventBus {
  constructor() {
    this.listeners = {}
  }
  on(name, fn) {
    if (!this.listeners[name]?.length) {
      this.listeners[name] = [fn]
    } else {
      this.listeners[name].push(fn)
    }
  }
  emit(name, ...data) {
    if (this.listeners[name]) {
      this.listeners[name].forEach(fn => {
        fn.apply(this, data)
      })
    }
  }
  once(name, fn) {
    const tem = (...data) => {
      fn(...data)
      this.removeListener(name)
    }
    this.on(name, tem)
  }
  removeListener(name) {
    if (this.listeners[name]) {
      delete this.listeners[name]
    }
  }
  removeListeners(names) {
    if (names?.length) {
      names.forEach(item => {
        if (this.listeners[item]) {
          delete this.listeners[item]
        }
      })
    } else {
      this.listeners = {}
    }
  }
}
