<template>
  <div class="content-body">
    <LastUpdate />
    <WorldStatistics />
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