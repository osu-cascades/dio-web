import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    getLastReading() {
      this.store.find('reading')
        .then((reading) => {
        })

    }
  }
});
