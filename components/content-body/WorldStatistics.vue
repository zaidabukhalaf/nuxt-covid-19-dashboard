<template>
  <div class="world-statistics">
    <div class="row align-items-center">
      <StaticsWidget
        v-for="data in worldStatic"
        :key="data.title"
        :title="data.title"
        :numbers="data.numbers"
      ></StaticsWidget>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import StaticsWidget from "@/components/ui/StaticsWidget";
export default {
  components: {
    StaticsWidget,
  },
  data() {
    return {
      filterdData: [
        "cases",
        "deaths",
        "recovered",
        "todayCases",
        "todayDeaths",
      ],
    };
  },
  async fetch() {
    const response = await axios.get("https://disease.sh/v3/covid-19/all");
    const worldData = await response.data;
    let worldStaticArray = Object.entries(worldData).map(([key, value]) => ({
      title: key,
      numbers: value,
    }));
    this.$store.dispatch("setworldStatic", worldStaticArray);
  },
  computed: {
    worldStatic() {
      const data = this.$store.getters.worldStatic.filter((item) =>
        this.filterdData.includes(item.title)
      );
      return data;
    },
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
</style>