import Vue from "vue";
import Vuex from "vuex";
import budgets from "./modules/budgets";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutation: {},
  getters: {},
  modules: {
    budgets
  }
});
