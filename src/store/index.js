import { createStore } from "vuex";
import axios from "axios";

const url = "https://ti-react-test.herokuapp.com/users";

export default createStore({
  state: {
    users: [],
    user: [],
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    },
    // setUser(state, payload) {
    //   state.user = payload;
    // },
  },
  actions: {
    setUsers({ commit }) {
      axios(url).then((response) => commit("setUsers", response.data));
    },
    // setUsers({ commit },id) {
    //   axios(`${url}/${id}`).then((response) => commit("setUser", response.data));
    // },
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
    // getUser: (state) => (id) => {
    //   return state.users.find((user) => user.id === id);
    // },
  },
});
