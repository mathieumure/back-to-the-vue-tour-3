<template>
    <div class="destination-time-modal-form">
        <div class="modal-content">

        </div>
    </div>
</template>

<script>
    // TODO: use better modal dependency
  export default {
    name: "destination-time-modal-form",

  }
</script>

<style scoped>
    .destination-time-modal-form {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
    }

    .modal-content {
        background-color: grey;
        position: absolute;
        left: 50%;
        top: 25%;
        width: 500px;
        height: 700px;
    }
</style>
