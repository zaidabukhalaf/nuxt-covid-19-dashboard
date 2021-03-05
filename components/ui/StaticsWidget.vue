<template>
  <div class="col-xl-6 col-lg-6 col-md-6 col">
    <div class="widget" :class="title">
      <h5>{{ title | capitalize }}</h5>
      <h2>{{ numbers | formatNumber }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    numbers: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.widget {
  padding: 20px 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  background-color: #32305f;
  flex-direction: column;
}
.cases {
  color: #3398fb;
}
.todayCases {
  color: #ff9100;
}
.recovered {
  color: #49daa0;
}
.deaths {
  color: #de4c4c;
}
.todayDeaths {
  color: #f10733;
}
</style>