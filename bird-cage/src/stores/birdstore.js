import { observable, action, computed } from 'mobx';

class BirdStore {
  // We want to keep track of the following data.
  @observable birds =[];

  // Action is to update the data in the store.
  @action addBird = (bird) => {
    this.birds.push(bird);
  }
 
  // Computed is to access the data in store, do some
  // calculation and get some information.
  // If the data in the store is udpated, then it will
  // reflect to the computed.
  @computed get birdCount() {
    return this.birds.length;
  }
}

// We do not want to have many instances of BirdStore.
// We only want to have one instanse of the store.
// So we only export the instance.
const store = new BirdStore();
export default store;