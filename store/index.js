import axios from "axios";

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
  async nuxtServerInit(vuexContext, context) {
    try {
      const response = await axios.get("https://disease.sh/v3/covid-19/all");
      const worldData = await response.data;
      let worldStaticArray = Object.entries(worldData).map(([key, value]) => ({
        title: key,
        numbers: value
      }));

      vuexContext.commit("setworldStatic", worldStaticArray);
    } catch (error) {
      return context.error(error);
    }
  }
};

export const getters = {
  worldStatic(state) {
    return state.worldStatic;
  }
};
