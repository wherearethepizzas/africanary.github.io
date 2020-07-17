<template>
    <div class="text-center bg-secondary m-5 p-5">
        <p class="display-2 text-white">Not yet developed.Thank you for signing up though.</p>
        <p class="text-white">:-)</p>
        
    </div>
</template>

<script>
export default {
    signout:function(){
            firebase
            .auth()
            .signOut()
            .then(() => {
                alert(this.username + ' signed out successfully')
                this.$router.push('/') 
            }, function(error) {
                alert('Sign Out Error', error);
            });
        }
}
</script>

<style>

</style>