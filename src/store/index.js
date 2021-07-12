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
    updateUser(state, updatedUser) {
      const index = state.users.findIndex((user) => user.id === updatedUser.id);
      if (index !== -1) {
        state.users.splice(index, 1, updatedUser);
      }
    },
  },
  actions: {
    setUsers({ commit }) {
      axios.get(url).then((response) => commit("setUsers", response.data));
    },
    updateUser({ commit }, updatedUser) {
      const response = axios.patch(`${url}/${updatedUser.id}`, updatedUser);
      console.log(response.data);
      commit("updateUser", response.data);
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
    getUser: (state) => (id) => state.users.find((user) => user.id === id),
  },
});
