import { defineStore } from "pinia";
export const useReversementStore = defineStore("reversement", () => {
  var reversement:any = null;

  function define(item: any) {
    reversement = item;
  }

  return { reversement, define };
});
