export default {
  creator(...args) {
    return {
      type: 'EXAMPLE',
      payload: args
    }
  }
}
