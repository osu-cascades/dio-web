import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
      id: 'dissolved-oxygen',
      name: 'Dissolved Oxygen',
      location: 'Ground level fish tank',
      reading: 15.67
    }, {
      id: 'pH',
      name: 'Potential of Hydrogen',
      location: 'Ground level fish tank',
      reading: 7.8
    }];
  }
});
