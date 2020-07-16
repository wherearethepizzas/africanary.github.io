<template>
  <div id='institute'>
        <div class="form-group row"><label for="staticEmail" class="col-md-2 col-form-label">Location:</label><div class="col-md-10"><input type="text" class="form-control" id="staticEmail" placeholder="Location" v-model="institutions.location"></div></div><div class="form-group row"><label for="inputPassword" class="col-md-2 col-form-label">Postal Address:</label><div class="col-md-10"><input type="" class="form-control" placeholder="Postal Address" v-model="institutions.postalAddress"></div></div>
    </div>
</template>

<script>
export default {
    computed:{
        institutions() {
            return this.$store.state.institutions
        }
    }
}
</script>

<style>

</style>