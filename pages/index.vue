<template>
  <div>
    <TheHeader />
    <div class="container">
      <ContentBody />
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/ui/TheHeader";
import ContentBody from "~/components/content-body/ContentBody";

export default {
  components: {
    TheHeader,
    ContentBody,
  },
};
</script>

