import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://vv-dio-service-staging.herokuapp.com',                    // 'http://localhost:3000',
  namespace: 'api/v1/do',

  pathForType() {
    return 'readings';
  }
});
