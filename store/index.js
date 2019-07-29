
export const state = () => {
    return {
      user: null
    }
  }
  
  export const mutations = {
    SET_USER (state, user) {
      console.log("store", user);
      state.user = user || null
      if(process.browser){
      localStorage.setItem("user", JSON.stringify(user))
    }
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