<template lang="pug">
    v-btn.py-lg-5.px-lg-2.mx-lg-2(outlined color="whatsapp").btn-wasap-inner
        a.d-flex.flex-row.align-center.justify-center(:href="country.link" style="width:100%; text-decoration:none;")
            .flag.pr-2
                v-avatar(size="25")
                    img(:src="require(`@/assets/nav/${country.flag}`)" alt="Flag")
            .text-flag
                .text-flag__country(style="font-size:12px") {{ country.name }}
</template>
<script>
export default {
  name: 'CountryWasap',
  props: ['country']
}
</script>
<style scoped>
.btn-wasap-inner{
    border-radius: 0px;
    background-color: RGB(31, 148, 134);
}
.text-flag__country{
    color: white;
}
@media only screen and (min-width: 1264px) {
.btn-wasap-inner{
    border-radius: 10px;
    background-color: white;
}
.text-flag__country{
    color: grey;
}
}
</style>
