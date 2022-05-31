<template>
  <form action="" id="shipping-form">
    <input type="text" placeholder="City" v-model="city">
    <input type="text" placeholder="State" v-model="state">
    <input type="number" placeholder="Postcode / Zip" v-model="zipCode">
    <button type="submit" form="shipping-form" @click.prevent="submitShippingAddress">
      GET A QUOTE
    </button>
  </form>
</template>

<script>
export default {
  name: 'ShippingForm',
  data() {
    return {
      city: '',
      state: '',
      zipCode: '',
    };
  },
  methods: {
    submitShippingAddress() {
      console.log(`City: ${this.city}, State: ${this.state}, ZIP: ${this.zipCode}`);
    },
  },
};
</script>

<style scoped lang="sass">
form
  display: flex
  flex-direction: column
input
  padding: 15px
  border: 1px solid #A4A4A4
  margin-bottom: 21px
button
  font-weight: 300
  font-size: 11px
  line-height: 13px
  color: #757575
  padding: 9px
  width: 100px
  border: 1px solid #A4A4A4
  background: none
  cursor: pointer
  &:hover
    border: 1px solid #fff
    background: $accentColor
    color: #fff
</style>
