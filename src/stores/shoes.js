import {observable} from 'mobx';

class Shoes {
  @observable shoes = [];
}

const shoes = new Shoes();
export default shoes;
