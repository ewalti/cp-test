import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  'item.name': validator('presence', true)
});

export default Ember.Component.extend(Validations, {

  tagName: 'li'

});
