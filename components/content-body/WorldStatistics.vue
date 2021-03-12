<template>
  <div class="world-statistics">
    <h1 class="mt-3 text-white">Covid-19 Global Data</h1>
    <div class="row align-items-center">
      <StaticsWidget
        v-for="data in worldStatic"
        :key="data.title"
        :title="data.title"
        :numbers="data.numbers"
      ></StaticsWidget>
      <ag-grid></ag-grid>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import clientApi from "@/components/server";
import { mapGetters } from "vuex";
import StaticsWidget from "@/components/ui/StaticsWidget";
import AgGrid from "@/components/ui/AgGrid";
export default {
  components: {
    StaticsWidget,
    AgGrid,
  },
  async fetch() {
    // const response = await axios.get("https://disease.sh/v3/covid-19/all");
    // const response = await axios.get("https://api.covid19api.com/summary");
    const response = await clientApi.getSummary();
    const worldData = await response.data.Global;
    const date = worldData.Date;
    let worldStaticArray = Object.entries(worldData).map(([key, value]) => ({
      title: key,
      numbers: value,
    }));
    worldStaticArray.pop();
    this.$store.dispatch("setworldStatic", worldStaticArray);
  },
  computed: {
    ...mapGetters(["worldStatic"]),
  },
  methods: {
    log() {
      console.log(this.$store.getters.worldStatic);
    },
  },
};
</script>

<style lang="scss" scoped>
.world-statistics {
  padding-bottom: 30px;
}
p {
  color: #7b6fff;
  font-size: 16px;
  font-weight: 600;
}
</style>