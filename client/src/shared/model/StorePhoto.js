import { makeAutoObservable } from "mobx";

class PhotoStore {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setCount(newCount) {
    this.count = newCount;
  }
}

const usePhoto = new PhotoStore();
export default usePhoto