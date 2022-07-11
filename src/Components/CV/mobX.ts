import { action, makeObservable, observable } from "mobx";

interface userData {
  name: string;
  lastName: string;
  age: number;
}

export class MobXExample {
  userData: userData[] = [];

  constructor() {
    makeObservable(this, {
      userData: observable,
      addUser: action,
    });
  }

  addUser(name: string, lastName: string, age: number) {
    const user: userData = {
      name,
      lastName,
      age,
    };
    this.userData.push(user);
  }
}

export const UsersStore = new MobXExample();
