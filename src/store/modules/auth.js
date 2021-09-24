import axios from 'axios'

const state = {
  user: null,
  typeUser: null,
  campaignsSenior: [],
  campaignsJunior: []
}
const getters = {
  isAuthenticated: state => !!state.user,
  getUserAuth: state => state.user,
  getTypeUser: state => state.typeUser
}
const actions = {
  async logIn ({ commit, state }, User) {
    const response = await axios.post('login/general', User)
    console.log(response.data)
    if (!response.data.length) {
      throw new Error('The user isnt in db')
    }
    if (response.data.length === 1) {
      commit('SET_TYPE_USER', 'junior')
    } else if (response.data.length === 2) {
      commit('SET_TYPE_USER', 'senior')
    }
    commit('SET_USER_AUTH', response.data[0])
  },
  async logOut ({ commit }) {
    const user = null
    commit('LOGOUT_USER', user)
  },
  async getCampaignsSeniorAPI (state, idSenior) {
    const response = await axios.get(`campana/senior/${idSenior}`)
    state.campaignsSenior = response.data
  },
  async getCampaignsJuniorAPI (state, idJunior) {
    const response = await axios.get(`campana/junior/${idJunior}`)
    state.campaignsJunior = response.data
  }
}
const mutations = {
  SET_USER_AUTH (state, payload) {
    state.user = payload
  },
  LOGOUT_USER (state) {
    state.user = null
  },
  SET_TYPE_USER (state, payload) {
    state.typeUser = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
