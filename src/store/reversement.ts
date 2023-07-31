import{defineStore} from "pinia"

export const useReversementStore = defineStore("reversement", () => {
  const reversement=null
  function define(item) {
    this.reversement=item;
  }

  return { reversement, define };
});
