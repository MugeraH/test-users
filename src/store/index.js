import { createStore } from "vuex";
import axios from "axios";

const url = "https://ti-react-test.herokuapp.com/users";

export default createStore({
  state: {
    users: [],
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    },
  },
  actions: {
    setUsers({ commit }) {
      axios(url).then((response) => commit("setUsers", response.data));
    },
  },
  modules: {},
  getters: {
    getUsers(state) {
      //limit number of users
      let resultList = state.users.slice(0, 20);
      //data has empty values , use filter to return users with a username 
      let results = resultList.filter((item) => item.name.length > 1);
      return results;
    },
  },
});
