import { makeAutoObservable } from "mobx";

class StoreAboutMe {
  selectedOptions = {
    "Как часто ты пьёшь?": null,
    "Как часто ты куришь?": null,
    "Ты занимаешься спортом?": null,
    "У тебя есть питомцы?": null,
  };

  constructor() {
    makeAutoObservable(this);
  }

  toggleOption(category, option) {
    if (this.selectedOptions[category] === option) {
      this.selectedOptions[category] = null; // снять выбор
    } else {
      this.selectedOptions[category] = option; // установить новый
    }
  }

  isSelected(category, option) {
    return this.selectedOptions[category] === option;
  }

  get count() {
    return Object.values(this.selectedOptions).filter(Boolean).length;
  }
}

const useAboutMe = new StoreAboutMe();
export default useAboutMe;
