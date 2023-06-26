/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable func-call-spacing */
/* eslint-disable prefer-rest-params */
const guid = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0
    const v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}
export default guid
