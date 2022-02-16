/* eslint-disable @typescript-eslint/ban-types */
import bus from '../utils/bus'

const EVENT_NAME = 'modal:toggle'

interface UseModal {
  open(): void
  close(): void
  listen(fn: Function): void
  off(fn: Function): void
}

export default (): UseModal => {
  const open = (payload = {}) => {
    bus.emit(EVENT_NAME, { status: true, ...payload })
  }

  const close = (payload = {}) => {
    bus.emit(EVENT_NAME, { status: false, ...payload })
  }

  const listen = (fn: Function) => {
    bus.on(EVENT_NAME, fn)
  }

  const off = (fn: Function) => {
    bus.off(EVENT_NAME, fn)
  }

  return { open, close, listen, off }
}
