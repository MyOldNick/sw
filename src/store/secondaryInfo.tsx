import { makeAutoObservable, runInAction } from "mobx";

class SecondaryInfo {
  counter: any = { home: 0, starships: 0, vehicles: 0 };
  info: any = { home: "", starships: [], vehicles: [] };

  constructor() {
    makeAutoObservable(this);
  }

  async getInfo(url: any, name: string) {
    if (!url.length) {
      return;
    }
    const res: any = await fetch(
      typeof url === "string" ? url : url[this.counter[name]]
    );
    const info: any = await res.json();
    
    runInAction(() => {
      name === "home"
        ? (this.info[name] = info.name)
        : this.info[name].push(info);
    });

    this.counter[name] = this.counter[name] + 1;

    if (this.counter[name] <= url.length - 1 && typeof url !== "string") {
      this.getInfo(url, name);
    } else {
      this.counter[name] = 0;
    }
  }

  clearState() {
    this.info = { home: "", starships: [], vehicles: [] };
  }
}

export default new SecondaryInfo();
