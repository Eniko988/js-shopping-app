;(function () {
  class PubSub {
    constructor () {
      this.topics = {}
    }

    hasHandler (topicName) {
      return this.topics.hasOwnProperty(topicName)
    }

    publish (topicName, data) {
      if (!this.hasHandler(topicName)) {
        return
      } else {
        this.topics[topicName].forEach(item => {
          item(data)
        })
      }
    }

    subscribe (topicName, handler) {
      if (!this.hasHandler(topicName)) {
        this.topics[topicName] = []
      }
      this.topics[topicName].push(handler)
    }
  }

  window.PubSub = new PubSub()
})()
