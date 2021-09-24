<template lang="pug">
  v-container.pa-0.ma-0.background(fluid).pb-16
    //- v-banner.secondary.py-0.text-center.text-subtitle-1.text-lg-h6.accent2--text(style="font-weight:bold") IMPORTACIONES EN PROCESO
    .d-flex.flex-column.d-lg-none.secondary.accent2--text(style="width:100%;position:fixed; z-index:3")
      a(no-gutters).py-1.justify-center.text-center.cyan.lighten-2.black--text(style="line-height:1.5; cursor:pointer; text-decoration:none;" href="https://www.pic-cargo.com/es/noticias/taller-importaciones/")
        .d.text-h6.d-flex.flex-row.justify-center
          .d APRENDE A IMPORTAR
          .d.px-1.accent--text GRATIS
        .d.overline--text 16-17 Octubre ⏩ Click Aqui
    v-container(fluid).px-0.pt-16.pt-lg-3.flex-column.video-inner-container.blue-grey.lighten-5
      .brand-video.text-center(style="line-height:1.5;width:80%;").mx-auto.pt-3.pt-lg-0
        span.deep-orange.lighten-3.pa-1 Esta es tu oportunidad de importar con poco dinero
      .title-video-p1.text-center(style="line-height:1;") Importaciones Grupales
      .title-video-p2.text-center(style="line-height:1.5;") Ahora sí puede hacerlo con una mínima inversión
      .video-container.py-2
        .video-banner.justify-center.deep-orange.darken-1.accent2--text.d-flex.flex-row.pa-1
          v-icon.accent2--text.icon-sound mdi-volume-high
          .text-p1 Asegurate que tu audio se encuentre activado
          .text-p2.px-1.d-none.d-lg-flex (Por favor espera que el video Cargue)
        .video-inner-container-2.mx-auto
          video(autoplay loop controls  muted style="width:100%;").elevation-22
            source(src="../assets/video/video-home.mp4" type="video/mp4")
            | Hubo un error al reproducir el video
      .button-participar.text-center.mt-2
        span( @click="goFaq").primary.rounded-lg.accent2--text.button-como-participar COMO PARTICIPAR
    v-container(fluid).px-0
      .container-inner(style="width:99%; max-width:1500px;").pa-0.mx-auto.background-section
        .campaigns-title.text-center.accent2--text.py-lg-8.py-1.title-campaigns-section Seleccione una Campaña
        v-row(no-gutters).justify-center.px-lg-16
          item-campaign(v-for="(campaign, index) in Campaigns" :key="index" :campaign="campaign")
    v-container(fluid).pa-0.mt-10(style="margin-bottom:80px;").d-flex.d-lg-none
      .container-inner(style="width:98%; max-width:1480px;").px-2.pb-8.mx-auto.accent2
        .campaigns-title.text-h6.text-lg-h5.titles--text.py-lg-4.py-4.px-6 CAMPAÑAS EXITOSAS Y LISTADOS DE IMPORTADORES
        v-carousel(style="height:180px"  hide-delimiters)
          template(v-slot:prev="{ on, attrs }")
            v-btn( v-bind="attrs" v-on="on" height="100px" style="margin-top:-30px; background-color:white; margin-left:-20px;").elevation-0.container-arrow-home
              v-icon(style="color:grey;").arrow-carousel-home mdi-chevron-left
          template(v-slot:next="{ on, attrs }")
            v-btn( v-bind="attrs" v-on="on" height="100px" style="margin-top:-30px; background-color:white; margin-right:-20px;").elevation-0.container-arrow-home
              v-icon(style="color:grey;").arrow-carousel-home mdi-chevron-right
          v-carousel-item(v-for="(campaignStock, index) in campaginsStock" :key="index")
            img(:src="campaignStock.portada" height="200px" width="100%" style="cursor:pointer;" @click="goImportadores(campaignStock.id)")
    v-container(fluid).pa-0.mt-10(style="margin-bottom:80px;").d-none.d-lg-flex
      .container-inner(style="width:98%; max-width:1480px;").px-2.pb-8.mx-auto.accent2
        .campaigns-title.text-h6.text-lg-h5.titles--text.py-lg-4.py-4.px-6 CAMPAÑAS EXITOSAS Y LISTADOS DE IMPORTADORES
        v-carousel(style="height:180px"  hide-delimiters)
          template(v-slot:prev="{ on, attrs }")
            v-btn( v-bind="attrs" v-on="on" height="100px" style="margin-top:-30px; background-color:white; margin-left:-20px;").elevation-0.container-arrow-home
              v-icon(style="color:grey;").arrow-carousel-home mdi-chevron-left
          template(v-slot:next="{ on, attrs }")
            v-btn( v-bind="attrs" v-on="on" height="100px" style="margin-top:-30px; background-color:white; margin-right:-20px;").elevation-0.container-arrow-home
              v-icon(style="color:grey;").arrow-carousel-home mdi-chevron-right
          v-carousel-item(v-for="(groupStock, index) in campaginsStockDesktop" :key="index")
            v-row
              v-col(v-for="(campaignStock, index) in groupStock" :key="index" cols="3")
                img(:src="campaignStock.portada" height="200px" width="100%" style="cursor:pointer;"  @click="goImportadores(campaignStock.id)")
    v-container(fluid).pa-0.mt-10
      .container-inner(style="width:98%; max-width:1480px;").px-2.pb-8.mx-auto.accent2
        .campaigns-title.text-h6.text-lg-h5.titles--text.py-lg-4.py-4.px-6 TESTIMONOS
        v-carousel(style="height:180px"  hide-delimiters)
          template(v-slot:prev="{ on, attrs }")
            v-btn( v-bind="attrs" v-on="on" height="100px" style="margin-top:-30px; background-color:white; margin-left:-20px;").elevation-0.container-arrow-home
              v-icon(style="color:grey;").arrow-carousel-home mdi-chevron-left
          template(v-slot:next="{ on, attrs }")
            v-btn( v-bind="attrs" v-on="on" height="100px" style="margin-top:-30px; background-color:white; margin-right:-20px;").elevation-0.container-arrow-home
              v-icon(style="color:grey;").arrow-carousel-home mdi-chevron-right
          v-carousel-item(style="height:180px")
            v-row
              v-col(cols="12" lg="3").text-center
                <iframe width="320px" height="180px" src="https://www.youtube.com/embed/efdWdL3DOx0?list=PLigcCq7cHAuY4ybceKzl-eguka2kOT3zc" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              v-col(cols="12" lg="3").text-center
                <iframe width="320px" height="180px" src="https://www.youtube.com/embed/Q1ZpfZZgzoI?list=PLigcCq7cHAuY4ybceKzl-eguka2kOT3zc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              v-col(cols="12" lg="3").text-center
                <iframe width="320px" height="180px" src="https://www.youtube.com/embed/_baTNgLo8So?list=PLigcCq7cHAuY4ybceKzl-eguka2kOT3zc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              v-col(cols="12" lg="3").text-center
                <iframe width="320px" height="180px" src="https://www.youtube.com/embed/PJIrFmZJU64?list=PLigcCq7cHAuY4ybceKzl-eguka2kOT3zc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          v-carousel-item
            v-row
              v-col(cols="12" lg="3").text-center
                <iframe width="320px" height="180px" src="https://www.youtube.com/embed/jRAIP-_WMcY?list=PLigcCq7cHAuY4ybceKzl-eguka2kOT3zc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              v-col(cols="12" lg="3").text-center
                <iframe width="320px" height="180px" src="https://www.youtube.com/embed/jrr9iTxQ4jI?list=PLigcCq7cHAuY4ybceKzl-eguka2kOT3zc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              v-col(cols="12" lg="3").text-center
                <iframe width="320px" height="180px" src="https://www.youtube.com/embed/dGvXICBrRkk?list=PLigcCq7cHAuY4ybceKzl-eguka2kOT3zc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              v-col(cols="12" lg="3").text-center
                <iframe width="320px" height="180px" src="https://www.youtube.com/embed/vo0nmkcayQU?list=PLigcCq7cHAuY4ybceKzl-eguka2kOT3zc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          v-carousel-item
            v-row
              v-col(cols="12" lg="3").text-center
                <iframe width="320px" height="180px" src="https://www.youtube.com/embed/je6afWI1uSw?list=PLigcCq7cHAuY4ybceKzl-eguka2kOT3zc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              v-col(cols="12" lg="3").text-center
                <iframe width="320px" height="180px" src="https://www.youtube.com/embed/0GlrHRngkvs?list=PLigcCq7cHAuY4ybceKzl-eguka2kOT3zc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              v-col(cols="12" lg="3").text-center
                <iframe width="320px" height="180px" src="https://www.youtube.com/embed/HRvApW4FiGg?list=PLigcCq7cHAuY4ybceKzl-eguka2kOT3zc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              v-col(cols="12" lg="3").text-center
                <iframe width="320px" height="180px" src="https://www.youtube.com/embed/Hreal5w-iWo?list=PLigcCq7cHAuY4ybceKzl-eguka2kOT3zc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          v-carousel-item
            v-row
              v-col(cols="12" lg="3").text-center
                <iframe width="320px" height="180px" src="https://www.youtube.com/embed/hfZLchq3T8w?list=PLigcCq7cHAuY4ybceKzl-eguka2kOT3zc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              v-col(cols="12" lg="3").text-center
                <iframe width="320px" height="180px" src="https://www.youtube.com/embed/TuaWNQejEcU?list=PLigcCq7cHAuY4ybceKzl-eguka2kOT3zc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              v-col(cols="12" lg="3").text-center
                <iframe width="320px" height="180px" src="https://www.youtube.com/embed/kCY4MceGxQ0?list=PLigcCq7cHAuY4ybceKzl-eguka2kOT3zc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              v-col(cols="12" lg="3").text-center
                <iframe width="320px" height="180px" src="https://www.youtube.com/embed/9X_Cb7NsHCE?list=PLigcCq7cHAuY4ybceKzl-eguka2kOT3zc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    v-container(fluid).pa-0.mt-10.mb-10
      .container-inner(style="width:98%; max-width:1480px;").px-2.pb-8.mx-auto.accent2
        .campaigns-title.text-h6.text-lg-h5.titles--text.py-lg-4.py-4.px-6 TRANSMISIONES EN VIVO
        v-carousel(style="height:180px"  hide-delimiters)
          template(v-slot:prev="{ on, attrs }")
            v-btn( v-bind="attrs" v-on="on" height="100px" style="margin-top:-30px; background-color:white; margin-left:-20px;").elevation-0.container-arrow-home
              v-icon(style="color:grey;").arrow-carousel-home mdi-chevron-left
          template(v-slot:next="{ on, attrs }")
            v-btn( v-bind="attrs" v-on="on" height="100px" style="margin-top:-30px; background-color:white; margin-right:-20px;").elevation-0.container-arrow-home
              v-icon(style="color:grey;").arrow-carousel-home mdi-chevron-right
          v-carousel-item(style="height:180px")
            v-row
              v-col(cols="12" lg="3").text-center
                <iframe width="320px" height="180px" src="https://www.youtube.com/embed/VzHcEN-TiSU?list=PLigcCq7cHAuay9C4do_u1XF6MtIVHDaCa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              v-col(cols="12" lg="3").text-center
                <iframe width="320px" height="180px"" src="https://www.youtube.com/embed/L8ZgSv_orIE?list=PLigcCq7cHAuay9C4do_u1XF6MtIVHDaCa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              v-col(cols="12" lg="3").text-center
                <iframe width="320px" height="180px" src="https://www.youtube.com/embed/F30--XZu2Hg?list=PLigcCq7cHAuay9C4do_u1XF6MtIVHDaCa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              v-col(cols="12" lg="3").text-center
                <iframe width="320px" height="180px" src="https://www.youtube.com/embed/IPnKL-gcMV8?list=PLigcCq7cHAuay9C4do_u1XF6MtIVHDaCa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          v-carousel-item
            v-row
              v-col(cols="12" lg="3").text-center
                <iframe width="320px" height="180px" src="https://www.youtube.com/embed/UUa5Zdc_gN4?list=PLigcCq7cHAuay9C4do_u1XF6MtIVHDaCa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              v-col(cols="12" lg="3").text-center
                <iframe width="320px" height="180px" src="https://www.youtube.com/embed/NOPN1p2DIxA?list=PLigcCq7cHAuay9C4do_u1XF6MtIVHDaCa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              v-col(cols="12" lg="3").text-center
                <iframe width="320px" height="180px" src="https://www.youtube.com/embed/4phXxSQhNGw?list=PLigcCq7cHAuay9C4do_u1XF6MtIVHDaCa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              v-col(cols="12" lg="3").text-center
                <iframe width="320px" height="180px" src="https://www.youtube.com/embed/8TXxS0PJ_mE?list=PLigcCq7cHAuay9C4do_u1XF6MtIVHDaCa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          v-carousel-item
            v-row
              v-col(cols="12" lg="3").text-center
                <iframe width="320px" height="180px" src="https://www.youtube.com/embed/qO_LurmmvZA?list=PLigcCq7cHAuay9C4do_u1XF6MtIVHDaCa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              v-col(cols="12" lg="3").text-center
                <iframe width="320px" height="180px" src="https://www.youtube.com/embed/LZDrKj3ntcc?list=PLigcCq7cHAuay9C4do_u1XF6MtIVHDaCa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              v-col(cols="12" lg="3").text-center
                <iframe width="320px" height="180px" src="https://www.youtube.com/embed/6Rf0OqxeuH8?list=PLigcCq7cHAuay9C4do_u1XF6MtIVHDaCa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              v-col(cols="12" lg="3").text-center
                <iframe width="320px" height="180px" src="https://www.youtube.com/embed/hA9P2mQBgj0?list=PLigcCq7cHAuay9C4do_u1XF6MtIVHDaCa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          v-carousel-item
            v-row
              v-col(cols="12" lg="3").text-center
                <iframe width="320px" height="180px" src="https://www.youtube.com/embed/hfZLchq3T8w?list=PLigcCq7cHAuY4ybceKzl-eguka2kOT3zc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              v-col(cols="12" lg="3").text-center
                <iframe width="320px" height="180px" src="https://www.youtube.com/embed/TuaWNQejEcU?list=PLigcCq7cHAuY4ybceKzl-eguka2kOT3zc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              v-col(cols="12" lg="3").text-center
                <iframe width="320px" height="180px" src="https://www.youtube.com/embed/kCY4MceGxQ0?list=PLigcCq7cHAuY4ybceKzl-eguka2kOT3zc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              v-col(cols="12" lg="3").text-center
                <iframe width="320px" height="180px" src="https://www.youtube.com/embed/9X_Cb7NsHCE?list=PLigcCq7cHAuY4ybceKzl-eguka2kOT3zc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    //- v-container(fluid).pa-0.mt-10
    //-   .container-inner(style="width:98%; max-width:1480px;").px-2.pb-8.mx-auto.accent2
    //-     .campaigns-title.text-h6.text-lg-h5.titles--text.py-lg-4.py-4.px-6 Transmisiones en vivo
    //-     v-carousel(style="height:180px"  hide-delimiters)
    //-       template(v-slot:prev="{ on, attrs }")
    //-         v-btn( v-bind="attrs" v-on="on" height="100px" style="margin-top:-30px; background-color:white; margin-left:-20px;").elevation-0.container-arrow-home
    //-           v-icon(style="color:grey;").arrow-carousel-home mdi-chevron-left
    //-       template(v-slot:next="{ on, attrs }")
    //-         v-btn( v-bind="attrs" v-on="on" height="100px" style="margin-top:-30px; background-color:white; margin-right:-20px;").elevation-0.container-arrow-home
    //-           v-icon(style="color:grey;").arrow-carousel-home mdi-chevron-right
    //-       v-carousel-item(style="height:180px")
    //-         v-row
    //-           v-col(cols="12" lg="3").text-center
    //-             <iframe width="320px" height="180px" src="https://www.youtube.com/embed/VzHcEN-TiSU?list=PLigcCq7cHAuay9C4do_u1XF6MtIVHDaCa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    //-           v-col(cols="12" lg="3").text-center
    //-             <iframe width="320px" height="180px"" src="https://www.youtube.com/embed/L8ZgSv_orIE?list=PLigcCq7cHAuay9C4do_u1XF6MtIVHDaCa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    //-           v-col(cols="12" lg="3").text-center
    //-             <iframe width="320px" height="180px" src="https://www.youtube.com/embed/F30--XZu2Hg?list=PLigcCq7cHAuay9C4do_u1XF6MtIVHDaCa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    //-           v-col(cols="12" lg="3").text-center
    //-             <iframe width="320px" height="180px" src="https://www.youtube.com/embed/IPnKL-gcMV8?list=PLigcCq7cHAuay9C4do_u1XF6MtIVHDaCa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    //-       v-carousel-item
    //-         v-row
    //-           v-col(cols="12" lg="3").text-center
    //-             <iframe width="320px" height="180px" src="https://www.youtube.com/embed/UUa5Zdc_gN4?list=PLigcCq7cHAuay9C4do_u1XF6MtIVHDaCa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    //-           v-col(cols="12" lg="3").text-center
    //-             <iframe width="320px" height="180px" src="https://www.youtube.com/embed/NOPN1p2DIxA?list=PLigcCq7cHAuay9C4do_u1XF6MtIVHDaCa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    //-           v-col(cols="12" lg="3").text-center
    //-             <iframe width="320px" height="180px" src="https://www.youtube.com/embed/4phXxSQhNGw?list=PLigcCq7cHAuay9C4do_u1XF6MtIVHDaCa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    //-           v-col(cols="12" lg="3").text-center
    //-             <iframe width="320px" height="180px" src="https://www.youtube.com/embed/8TXxS0PJ_mE?list=PLigcCq7cHAuay9C4do_u1XF6MtIVHDaCa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    //-       v-carousel-item
    //-         v-row
    //-           v-col(cols="12" lg="3").text-center
    //-             <iframe width="320px" height="180px" src="https://www.youtube.com/embed/qO_LurmmvZA?list=PLigcCq7cHAuay9C4do_u1XF6MtIVHDaCa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    //-           v-col(cols="12" lg="3").text-center
    //-             <iframe width="320px" height="180px" src="https://www.youtube.com/embed/LZDrKj3ntcc?list=PLigcCq7cHAuay9C4do_u1XF6MtIVHDaCa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    //-           v-col(cols="12" lg="3").text-center
    //-             <iframe width="320px" height="180px" src="https://www.youtube.com/embed/6Rf0OqxeuH8?list=PLigcCq7cHAuay9C4do_u1XF6MtIVHDaCa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    //-           v-col(cols="12" lg="3").text-center
    //-             <iframe width="320px" height="180px" src="https://www.youtube.com/embed/hA9P2mQBgj0?list=PLigcCq7cHAuay9C4do_u1XF6MtIVHDaCa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    //-       v-carousel-item
    //-         v-row
    //-           v-col(cols="12" lg="3").text-center
    //-             <iframe width="320px" height="180px" src="https://www.youtube.com/embed/hfZLchq3T8w?list=PLigcCq7cHAuY4ybceKzl-eguka2kOT3zc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    //-           v-col(cols="12" lg="3").text-center
    //-             <iframe width="320px" height="180px" src="https://www.youtube.com/embed/TuaWNQejEcU?list=PLigcCq7cHAuY4ybceKzl-eguka2kOT3zc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    //-           v-col(cols="12" lg="3").text-center
    //-             <iframe width="320px" height="180px" src="https://www.youtube.com/embed/kCY4MceGxQ0?list=PLigcCq7cHAuY4ybceKzl-eguka2kOT3zc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    //-           v-col(cols="12" lg="3").text-center
    //-             <iframe width="320px" height="180px" src="https://www.youtube.com/embed/9X_Cb7NsHCE?list=PLigcCq7cHAuY4ybceKzl-eguka2kOT3zc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</template>

<script>
import ItemCampaign from '../components/home/ItemCampaign.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    ItemCampaign
  },
  data: () => ({
    campaigns: [
      { type: 'Compra por Categoria', image: 'https://picsum.photos/id/1/400/400', key: '670a4ab03f9852dd8218eea3739b710c' },
      { type: 'Computadoras y accesorios', image: 'https://picsum.photos/id/2/400/400', key: '68abaa1752af3b1848da9048be40f776' },
      { type: 'Electronicos', image: 'https://picsum.photos/id/3/400/400', key: '633d007fd080076d54b0da3aeae62a74' },
      { type: 'Oculus', image: 'https://picsum.photos/id/4/400/400', key: 'aa6570158b62ef4e36cdcdb6fec1339e' }
    ]
  }),
  computed: {
    ...mapGetters({ Campaigns: 'getCampaigns', isMobile: 'getIsMobile', campaginsStock: 'getCampaignsStock' }),
    campaginsStockDesktop () {
      let a = 0
      let b = 4
      const arrayTotal = []
      for (let index = 0; index < Number(this.campaginsStock.length / 4); index++) {
        let subarray = []
        subarray = this.campaginsStock.slice(a, b)
        arrayTotal.push(subarray)
        a += 4
        b += 4
      }
      return arrayTotal
    }
  },
  methods: {
    ...mapActions(['getCampaignsAPI', 'getCampaignsStockAPI']),
    goImportadores (id) {
      this.$router.push(`/importadores/${id}`)
    },
    goFaq () {
      this.$router.push('/faq')
    }
  },
  mounted () {
    this.getCampaignsAPI()
    this.getCampaignsStockAPI()
  }
}
</script>
<style scoped>
.background-section{
background-image: linear-gradient(to bottom, #1c2b53, #324e70, #51728b, #7997a5, #a7bcc1, #bdcccf, #d3dddd, #eaeded, #eaeded, #eaeded, #eaeded, #eaeded);
}
.arrow-carousel-home{
  font-size: 30px;
}
.container-arrow-home{
  width: 30px;
}
@font-face {
    font-family: 'Gotham';
    src: url('../assets/fonts/GothamBold.ttf');
    font-weight: bold;
}
@font-face {
    font-family: 'Gotham';
    src: url('../assets/fonts/GothamLight.ttf');
    font-weight: lighter;
}
@font-face {
    font-family: 'Gotham';
    src: url('../assets/fonts/GothamBook.ttf');
    font-weight: 500;
}
.brand-video{
  font-family: 'Gotham';
  font-size: 16px;
  font-weight: 500;
}
.title-video-p1{
  font-family: 'Gotham';
  font-size: 25px;
  font-weight: bold;
}
.title-video-p2{
  font-family: 'Gotham';
  font-size: 15px;
  font-weight: lighter;
}
.text-p1{
  font-family: 'Gotham';
  font-size: 10px;
  font-weight: bold;
}
.text-p2{
  font-family: 'Gotham';
  font-size: 10px;
  font-weight: lighter;
}
.video-banner{
}
.video-inner-container-2{
}
.icon-sound{
  font-size: 16px;
}
.button-como-participar{
  cursor:pointer;
  padding: 10px;
  font-family: 'Gotham';
  font-size: 20px;
  font-weight: bold;
}
.title-campaigns-section{
  font-family: 'Gotham';
  font-size: 20px;
  font-weight: bold;
}
@media only screen and (min-width: 1264px) {
  .arrow-carousel-home{
    font-size: 80px;
  }
  .container-arrow-home{
    width: 100px;
  }
  .brand-video{
  font-family: 'Gotham';
  font-size: 25px;
  font-weight: 500;
}
.title-video-p1{
  font-family: 'Gotham';
  font-size: 60px;
  font-weight: bold;
}
.title-video-p2{
  font-family: 'Gotham';
  font-size: 35px;
  font-weight: lighter;
}
.text-p1{
  font-family: 'Gotham';
  font-size: 16px;
  font-weight: bold;
}
.text-p2{
  font-family: 'Gotham';
  font-size: 16px;
  font-weight: lighter;
}
.video-banner{
  width:50%; position:absolute;left:25%;
}
.video-inner-container-2{
  width:50%;
}
.icon-sound{
  font-size: 20px;
}
.button-como-participar{
  cursor:pointer;
  padding: 20px;
  font-family: 'Gotham';
  font-size: 25px;
  font-weight: bold;
}
.title-campaigns-section{
  font-family: 'Gotham';
  font-size: 30px;
  font-weight: bold;
}
}
</style>
