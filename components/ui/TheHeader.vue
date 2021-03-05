<template>
  <div class="header">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <nav class="navbar">
            <h1>Covid-19</h1>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.header {
  padding: 10px;
  width: 100%;
  z-index: 999;
  transition: all 0.3s ease-in;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  background: #32305f !important;
}
.header h1 {
  color: #fff;
}
.navbar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
}
</style>