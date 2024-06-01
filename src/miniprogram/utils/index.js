/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable func-call-spacing */

import mpx from "@mpxjs/core"
import dayjs from "dayjs"
import Dialog from '@vant/weapp/dialog/dialog'

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

export const todayIsShare = () => {
  const currentKey = 'today_share_key'
  const checkTime = +mpx.getStorageSync(currentKey)
  if (checkTime) {
    const isSame = dayjs(checkTime).isSame(dayjs(), 'day')
    if (isSame) {
      return true
    }
  }
  mpx.setStorageSync(currentKey, Date.now())
  Dialog.confirm({
    title: '提示',
    message: '请分享一个可能需要的朋友或者群才能拨打电话哦',
    showCancelButton: false,
    confirmButtonOpenType: 'share'
  })
  return false
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
