// observable: allows us to know which properties of the store to keep track of changes to
// action: these are functions which change the state (the observable values)
// computed: these are functions which return values calculated from the state
import { observable, action, computed } from 'mobx';

// We will create a normal class which doesn't extend from anything.
// don't export from here like we normally do, it is done slightly differently
// below
class ShoeStore {
  // We add @observable infront of the property we want to observe
  // We can also add its default/initial value, in this case an empty array
  @observable shoes = [];

  // This action function will receive a new shoe and add it to our observable
  // property by pushing it on... mobx doesn't need to be immutable so we
  // can just use the push() method again
  @action addShoe = (shoe) => {
    this.shoes.push(shoe);
  }

  // @computed functions (need the word get in front) allow you to access calculations
  // or modifications of the original observable values... for example, instead of
  // having to calculate how many shoes there are in every component, you will just
  // access `shoesCount` and it will do the work for you.
  // this `get` word is new... it basically means when you access it, you do
  // it like theStore.shoesCount instead of calling it like theStore.shoesCount()
  @computed get shoesCount() {
    return this.shoes.length;
  }
}

// Let's create an instance of this Shoe class
const shoeStore = new ShoeStore();
// Export the instance rather than the class itself
export default shoeStore;
