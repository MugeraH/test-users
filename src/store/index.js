import { createStore } from "vuex";
import axios from "axios";

const url = "https://ti-react-test.herokuapp.com/users";

export default createStore({
  state: {
    users: [],
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
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
      axios.patch(`${url}/${updatedUser.id}`, updatedUser).then((response) => {
        console.log(response.data);
        commit("updateUser", response.data);
      });
    },
    async filterUsers({ commit }, e) {
      const limit = parseInt(
        e.target.options[e.target.options.selectedIndex].innerText
      );
      let response = await axios.get(url);
      let resultList = response.data;
      let result = resultList.slice(0, limit);
      console.log(result.length);

      commit("setUsers", result);
    },
  },
  modules: {},
  getters: {
    allUsers(state) {
      //limit number of users
      let resultList = state.users.slice(0, 20);
      //data has empty values , use filter to return users with a username
      let results = state.users.filter((item) => item.name.length > 1);
      return results;
    },
    getUser: (state) => (id) => state.users.find((user) => user.id === id),
  },
});
