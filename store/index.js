
export const state = () => {
    return {
      user: null
    }
  }
  
  export const mutations = {
    SET_USER (state, user) {
      console.log(user);
      state.user = user || null
    }
  }
  
  export const getters = {
    isAuthenticated (state) {
      console.log(state.user);
      return !!state.user
    },
    loggedUser (state) {
      return state.user
    }
  }