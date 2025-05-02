import { makeAutoObservable } from "mobx";

class StoreCollectingInformation {
  user = {
    tg_id: null,
    username: "",
    init_data: "",
    name: "",
    age: null,
    gender: null,
    bio: "",
    language: "",
    preferences: [],
    searchGoal: "",
    photos: [],
    latitude: null,
    longitude: null,
  };

  constructor() {
    makeAutoObservable(this);
  }

  setUserInfo(newUserInfo) {
    this.user = { ...this.user, ...newUserInfo };
  }

  setLocation({ latitude, longitude }) {
    this.user.latitude = latitude;
    this.user.longitude = longitude;
  }

  addPhoto(file) {
    if (this.user.photos.length < 6) {
      this.user.photos.push(file);
    }
  }

  removePhoto(index) {
    this.user.photos.splice(index, 1);
  }

  get userPhotos() {
    return this.user.photos;
  }

  removeUserInfo() {
    this.user = {
      tg_id: null,
      username: "",
      init_data: "",
      name: "",
      age: null,
      gender: null,
      bio: "",
      language: "",
      preferences: [],
      searchGoal: "",
      photos: [],
      latitude: null,
      longitude: null,
    };
  }

  isUserInfoComplete() {
    const { tg_id, username, init_data, name, age, gender, bio, language, searchGoal, photos, latitude, longitude } = this.user;
    const requiredFieldsFilled = tg_id && username && init_data && name && age && gender && bio && language && searchGoal && photos.length > 0;
    const locationFilled = latitude !== null && longitude !== null;

    return requiredFieldsFilled && locationFilled;
  }
}

const useCollectingInformation = new StoreCollectingInformation();
export default useCollectingInformation;
