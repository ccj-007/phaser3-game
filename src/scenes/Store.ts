class Store {
  data: any = {};
  static instance;

  constructor() {
    this.data = new Map();
  }
  static getInstance() {
    if (!Store.instance) {
      Store.instance = new Store();
    }
    return Store.instance;
  }

  get(key) {
    return this.data.get(key);
  }

  set(key, value) {
    this.data.set(key, value);
  }

  delete(key) {
    this.data.delete(key);
  }
}

export default Store.getInstance();
