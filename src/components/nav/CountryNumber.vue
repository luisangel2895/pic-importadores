<template lang="pug">
    a.d-flex.flex-row.align-center.px-4(:href="country.url")
        .flag.pr-2
            v-avatar(size="30")
                img(:src="require(`@/assets/nav/${country.flag}`)" alt="Flag")
        .text-flag.accent2--text(style="font-size:12px")
            .text-flag__country.mb-n1 {{ country.name }}
            .text-flag__number {{ country.number }}
</template>
<script>
export default {
  name: 'CountryNumber',
  props: ['country']
}
</script>
