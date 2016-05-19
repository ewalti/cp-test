import Ember from 'ember';

const { get, computed } = Ember;

export default Ember.Component.extend({

  items: [],

  isValid: computed('items.@each.isValid', {
    get() {
      console.log(get(this, 'items').filterBy('isValid').length === get(this, 'items.length'), get(this, 'items').filterBy('isValid').length, get(this, 'items.length'));
      return get(this, 'items').filterBy('isValid').length === get(this, 'items.length');
    }
  }),

  addItem() {
    get(this, 'items').pushObject({})
  },

  deleteItem(item) {
    console.log('deleteItem');
    get(this, 'items').removeObject(item)
  }

});
