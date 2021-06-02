import Vue from "vue";

const budgetStore = {
  namespaced: true,
  state: {
    list: {
      1: {
        type: "INCOME",
        value: 100,
        comment: "income coments",
        id: 1
      },
      2: {
        type: "OUTCOME",
        value: -50,
        comment: "Outcome coments",
        id: 2
      }
    }
  },
  getters: {
    budgetList: ({ list }) => Object.values(list)
  },
  mutations: {
    ADD_INCOME(state, income) {
      Vue.set(state.list, income.id, income);
    },
    DELETE_INCOME(state, id) {
      Vue.delete(state.list, id);
    }
  },
  actions: {
    addNewIncome({ commit }, income) {
      const newIncome = { ...income, id: String(Math.random()) };
      commit("ADD_INCOME", newIncome);
    },
    deleteIncome({ commit }, id) {
      commit("DELETE_INCOME", id);
    }
  }
};

export default budgetStore;
