<template>
  <div class="delete-dialog">
    <h2>Confirm</h2>
    <p>Are you sure?</p>
    <div class="delete-buttons">
      <button class="btn btn-cancel" @click="$emit('close', 'cancel')">Cancel</button>
      <button class="btn btn-proceed" @click="$emit('close', 'confirm')">Confirm</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeleteDialog',
};
</script>

<style scoped lang="sass">
button
  width: 100px
  padding: 10px
  border-radius: 5px
.delete
  &-dialog
    display: flex
    flex-direction: column
    justify-content: space-between
    align-items: center
    height: 160px
  &-buttons
    display: flex
    justify-content: space-around
    width: 100%
</style>
