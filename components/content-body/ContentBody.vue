<template>
  <div class="content-body">
    <LastUpdate />
    <WorldStatistics />
    <b-card
      title="Card Title"
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      hello
    </b-card>
  </div>
</template>

<script>
import LastUpdate from "@/components/content-body/LastUpdate";
import WorldStatistics from "@/components/content-body/WorldStatistics";
export default {
  components: {
    LastUpdate,
    WorldStatistics,
  },
};
</script>