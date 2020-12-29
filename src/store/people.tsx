import { makeAutoObservable, runInAction } from "mobx";

//types
import { PeopleType } from "../types/types";

class People {
  people: Array<PeopleType> = [];

  constructor() {
    makeAutoObservable(this);
  }

  getPeople() {
    fetch(`https://swapi.dev/api/people/`)
      .then((res) => res.json())
      .then((res) => {
        runInAction(() => {
          this.people = res.results;
        });
      });
  }
}

export default new People();
