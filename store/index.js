export const state = () => {
  return {
    worldStatic: []
  };
};

export const mutations = {
  setworldStatic(state, data) {
    state.worldStatic = data;
  }
};

export const actions = {
  setworldStatic(state, payload) {
    state.commit("setworldStatic", payload);
  }
};

export const getters = {
  worldStatic(state) {
    return state.worldStatic;
  }
};
