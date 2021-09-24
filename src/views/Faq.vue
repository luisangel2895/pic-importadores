<template lang="pug">
    v-containe(fluid)
        v-container.accent2.container-faq-inner.my-lg-8
            .text-right
                v-icon(@click="goback()") mdi-close
            .title-faq.text-center.text-lg-h4.text-h6.primary--text.py-4 PREGUNTAS FRECUENTES
            v-expansion-panels
                v-expansion-panel
                        v-expansion-panel-header.text-overline.text-lg-button(style="line-height:1.5")
                            .d-flex.flex-column
                                | ¿COMO OBTENGO LOS PRECIOS Y LAS NOVEDADES QUE VAN A IMPORTAR?
                                strong.red--text (Aplicar para Peru)
                            template(v-slot:actions)
                                v-icon(color='secondary') $expand
                        v-expansion-panel-content.text-body-2.text-lg-body-1
                            .d-block Se debe inscribir en los grupos cerrados, aquí los participantes hacen propuestas de los productos, análisis de mercado y factibilidad del negocio.
                            .d-block El precio de inscripción para Perú es de 30 soles si se inscribe por esta pagina (precio normal 50 soles)
                            .d-block.d-lg-none.text-center
                                a(:href="getAsesorEnLinea" style="text-decoration:none;")
                                    v-btn(outlined color="whatsapp")
                                        v-icon.mr-2 mdi-whatsapp
                                        | CONTACTANOS
                v-expansion-panel
                    v-expansion-panel-header.text-overline.text-lg-button(style="line-height:1.5") ¿Como Participar y Hacer Mi Pedido?
                        template(v-slot:actions)
                            v-icon(color='secondary') $expand
                    v-expansion-panel-content.text-body-2.text-lg-body-1
                        .d-block
                            | Es muy fácil importar con Pic Cargo, empresa de carga y aduana. Nos dedicamos a ayudar a emprendedores a
                            strong.px-2 IMPORTAR
                            | mercancía con poco capital.
                        .d-block.py-4 ¿Cómo lo hacemos?
                        .d-block.py-1 Simplemente reunimos a un grupo de personas interesadas en importar productos en común. Todo esto con el fin de compartir costes y así traer la mercancía que desee. De esta manera es posible iniciar un emprendimiento desde cero con productos de alta rentabilidad que seleccionamos de acuerdo a tu negocio y un estudio del mercado.
                        .d-block.py-1
                            | Aquí los
                            strong.px-2 pasos que debes seguir
                            | para realizar tu primera importación
                        .d-block.py-1
                            | 1.Verifica en nuestra web los productos de interés. Actualmente
                            strong.px-2 tenemos algunos productos sugeridos
                            | de importaciones que se van realizando, puede revisar cada campaña en proceso y ver la demanda de los diferentes productos.
                        .d-block.py-1
                            | 2. Contacte a un asesor a través de WhatsApp
                            a.px-1.accent--text(:href="getAsesorEnLinea") (Click aqui para contactar)
                            | . Nuestro equipo está listo para atender sus dudas y
                            strong.px-2 guiarlo a través del proceso sin complicaciones
                            | , una asesoría paso a paso para hacerlo más fácil para usted.
                        .d-block.py-1 3. Define tu nivel de inversión. Nuestras campañas de importación grupal tienen un importe mínimo de acuerdo a cada producto.
                        .d-block.px-10
                            ul
                                li Venezuela 500 dolares
                                li Perú 1000 dólares
                                li Panamá 1000 dólares
                        .d-block.py-1 4. Haz tu pedido online en nuestra plataforma. Sigue los pasos sencillos para concretar tu pedido.
                        .d-block.py-i
                            | Si tienes dudas sobre nuestra experiencia y confiabilidad, puedes acceder a la
                            strong.px-2 ruta de verificación de nuestra trayectoria.
                        .d-block.py-2 Te acompañamos en todo el proceso y nos aseguramos que tu mercancía llegue a tus manos.
                        .d-block.py-2 Unase a otros emprendedores y realiza tu primera importación.
                        .d-block.d-lg-none.text-center
                                a(:href="getAsesorEnLinea" style="text-decoration:none;")
                                    v-btn(outlined color="whatsapp")
                                        v-icon.mr-2 mdi-whatsapp
                                        | CONTACTANOS

                v-expansion-panel
                    v-expansion-panel-header.text-overline.text-lg-button(style="line-height:1.5") ¿COMO SE QUE ESTO NO ES UNA ESTAFA?
                        template(v-slot:actions)
                            v-icon(color='secondary') $expand
                    v-expansion-panel-content.text-body-2.text-lg-body-1
                        .d-block 1. En el listado de productos en stock y productos en tránsito están los nombres y números de teléfono de todos los importadores que trabajan con nosotros, sientase libre de llamar a cualquiera y pedir referencia sobre nuestra empresa.
                        .d-block
                            | 2. Puede dirigirse a nuestras oficinas y reunirse con
                            a.accent--text.px-1(href="https://www.pic-cargo.com/es/contact/")  nosotros
                        .d-block
                            | 3. Revisar los videos en youtube donde hablamos sobre todos los temas logisticos y de aduana:
                            a.accent--text.px-1(href="https://www.youtube.com/channel/UCaAprzcpP0PrafQzMDfJ2uA")  Link al canal
                        .d-block.d-lg-none.text-center
                                a(:href="getAsesorEnLinea" style="text-decoration:none;")
                                    v-btn(outlined color="whatsapp")
                                        v-icon.mr-2 mdi-whatsapp
                                        | CONTACTANOS
                v-expansion-panel
                        v-expansion-panel-header.text-overline.text-lg-button(style="line-height:1.5") ¿PUEDO ESCOGEER EL PRODUCTO O TENGO QUE COMPRAR LO QUE USTEDES TENGAN EN LAS LISTAS?
                            template(v-slot:actions)
                                v-icon(color='secondary') $expand
                        v-expansion-panel-content.text-body-2.text-lg-body-1
                            .d-block Precisamente lo que nos diferencia de la competencia que nuestros importadores pueden sugerir los productos que se van a comprar, estos se someten a votación en el grupo y si hay un consenso se importa.
                            .d-block.d-lg-none.text-center
                                a(:href="getAsesorEnLinea" style="text-decoration:none;")
                                    v-btn(outlined color="whatsapp")
                                        v-icon.mr-2 mdi-whatsapp
                                        | CONTACTANOS
                v-expansion-panel
                        v-expansion-panel-header.text-overline.text-lg-button(style="line-height:1.5") ¿CUANTO ES EL MINIMO DE LA INVERSION Y QUE INCLUYE?
                            template(v-slot:actions)
                                v-icon(color='secondary') $expand
                        v-expansion-panel-content.text-body-2.text-lg-body-1
                            .d-block En la mayoría de los casos el mínimo es de USD 1000, aunque dependiendo del producto existen montos superiores.
                            .d-block
                                strong.pr-1 La inversión incluye:
                                | la compra del producto, logística internacional y aduana de importación e impuestos.
                            .d-block
                                strong.pr-1 NOTA:
                                | algunas veces la aduana realiza lo que se llama ajuste de valor y puede variar los impuestos estimados, para esto se enviará un soporte respaldado por la misma aduana.
                            .d-block.d-lg-none.text-center
                                a(:href="getAsesorEnLinea" style="text-decoration:none;")
                                    v-btn(outlined color="whatsapp")
                                        v-icon.mr-2 mdi-whatsapp
                                        | CONTACTANOS
                v-expansion-panel
                        v-expansion-panel-header.text-overline.text-lg-button(style="line-height:1.5")
                            .d-flex.flex-column
                                | ¿PORQUE PIDEN UNA INSCRIPCION PARA DAR PRECIOS?
                                strong.red--text (Aplicar para Peru)
                            template(v-slot:actions)
                                v-icon(color='secondary') $expand
                        v-expansion-panel-content.text-body-2.text-lg-body-1
                            .d-block
                                | Por situaciones en el pasado con algunas personas decidimos dar los
                                strong.px-1 PRECIOS DE NUESTROS CATALOGOS
                                | en nuestros
                                strong.px-1 GRUPOS CERRADOS
                                | por seguridad de nuestros importadores.
                            .d-block.my-2
                                |  El pago es unico y adicional a ello es
                                strong.px-1  DEDUCIBLE DE SU PRIMERA IMPORTACION
                                | Inscribete con 50 soles
                            .d-block.py-2.text-center
                                | Contacta un asesor
                                a.px-1.accent--text(:href="getAsesorEnLinea") (Click aqui para contactar)
                            .d-block.d-lg-none.text-center
                                a(:href="getAsesorEnLinea" style="text-decoration:none;")
                                    v-btn(outlined color="whatsapp")
                                        v-icon.mr-2 mdi-whatsapp
                                        | CONTACTANOS
                //- v-expansion-panel
                //-         v-expansion-panel-header.text-overline.text-lg-button(style="line-height:1.5")
                //-             .d-flex.flex-column
                //-                 | ¿QUE SUCEDE CON EL DINERO QUE DOY EN LA INSCRIPCION?
                //-                 strong.red--text (Aplicar para Peru)
                //-             template(v-slot:actions)
                //-                 v-icon(color='secondary') $expand
                //-         v-expansion-panel-content.text-body-2.text-lg-body-1
                //-             .d-block Lo hacemos con la finalidad de resguardar la información de nuestros costos de la competencia.
                v-expansion-panel
                        v-expansion-panel-header.text-overline.text-lg-button(style="line-height:1.5") ¿CUANDO DEBO REALIZAR EL PAGO DE LA INVERSION?
                            template(v-slot:actions)
                                v-icon(color='secondary') $expand
                        v-expansion-panel-content.text-body-2.text-lg-body-1
                            .d-block Está dividida en 2 o 3 partes de acuerdo con las condiciones del envío, fabricación y tiempos de llegada de la mercancía.
                            .d-block.d-lg-none.text-center
                                a(:href="getAsesorEnLinea" style="text-decoration:none;")
                                    v-btn(outlined color="whatsapp")
                                        v-icon.mr-2 mdi-whatsapp
                                        | CONTACTANOS
                v-expansion-panel
                        v-expansion-panel-header.text-overline.text-lg-button(style="line-height:1.5") ¿DEBO TENER RUC/RIF O CONTITUIDA UNA EMPRESA PARA IMPORTAR?
                            template(v-slot:actions)
                                v-icon(color='secondary') $expand
                        v-expansion-panel-content.text-body-2.text-lg-body-1
                            .d-block No es necesario porque nosotros PIC-CARGO.COM, nos encargamos de apoyar al importador siendo los responsables legales y poniendo nuestro nombre y una vez que la mercancía arriba al país la separamos y entregamos a cada uno de los participantes.
                            .d-block.d-lg-none.text-center
                                a(:href="getAsesorEnLinea" style="text-decoration:none;")
                                    v-btn(outlined color="whatsapp")
                                        v-icon.mr-2 mdi-whatsapp
                                        | CONTACTANOS
                v-expansion-panel
                        v-expansion-panel-header.text-overline.text-lg-button(style="line-height:1.5") ¿A NOMBRE DE QUIEN VIENE LA IMPORTACION Y QUIEN ES EL RESPONSABLE?
                            template(v-slot:actions)
                                v-icon(color='secondary') $expand
                        v-expansion-panel-content.text-body-2.text-lg-body-1
                            .d-block La importación viene a nombre de PIC-CARGO.COM y somos los únicos responsables de todo el proceso.
                            .d-block.d-lg-none.text-center
                                a(:href="getAsesorEnLinea" style="text-decoration:none;")
                                    v-btn(outlined color="whatsapp")
                                        v-icon.mr-2 mdi-whatsapp
                                        | CONTACTANOS
                v-expansion-panel
                        v-expansion-panel-header.text-overline.text-lg-button(style="line-height:1.5") ¿USTEDES HACEN LA ENTREGA EN MI PROVINCIA, REGION O ESTADO?
                            template(v-slot:actions)
                                v-icon(color='secondary') $expand
                        v-expansion-panel-content.text-body-2.text-lg-body-1
                            .d-block Sí, estas se hacen a través de una agencia interprovincial o internas y con un previo acuerdo con nosotros.
                            .d-block.d-lg-none.text-center
                                a(:href="getAsesorEnLinea" style="text-decoration:none;")
                                    v-btn(outlined color="whatsapp")
                                        v-icon.mr-2 mdi-whatsapp
                                        | CONTACTANOS
                v-expansion-panel
                        v-expansion-panel-header.text-overline.text-lg-button(style="line-height:1.5") ¿CUAL ES EL TIEMPO DE ENTRE?
                            template(v-slot:actions)
                                v-icon(color='secondary') $expand
                        v-expansion-panel-content.text-body-2.text-lg-body-1
                            .d-block Los tiempos de entrega dependerán de varios factores, algunos de estos son:
                            .d-block 1.- Condiciones de entrega del producto por parte del fabricante. Es decir, si hay productos en stock la entrega y envío es inmediato, si no hay productos en stock la fábrica se demora un tiempo en producir (puede ser de 7, 15 o 30 días)
                            .d-block
                                | 2.- El tiempo de entrega también dependerá del tipo de envío (marítimo o aéreo)
                                a.px-2(href="https://www.pic-cargo.com/es/noticias/flete-aereo-o-flete-maritimo/") consulte aqui
                            .d-block 3.- Otros de los factores que influyen va a ser el país de cual importemos la mercancía (estamos trabajando principalmente con USA, China o Panamá y estos tardan entre 30 a 45)
                            .d-block.text-center.py-10
                                strong Para los que no me conocen mi nombre es Carlos Ramírez fundador y CEO de la empresa PIC CARGO y somos los organizadores de la ASOCIACIÓN DE IMPORTADORES GRUPALES
                            .d-block.d-lg-none.text-center
                                a(:href="getAsesorEnLinea" style="text-decoration:none;")
                                    v-btn(outlined color="whatsapp")
                                        v-icon.mr-2 mdi-whatsapp
                                        | CONTACTANOS
            .copyright.text-center.pt-5.text-body-2 Copyright © PIC 2021.
        .d-lg-none(style="height :100px;")
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Faq',
  computed: {
    ...mapGetters(['getAsesorEnLinea'])
  },
  mounted () {
    window.scroll(0, 0)
  },
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
.container-faq-inner{
 width: 100%;
}
@media (min-width: 1264px) {
.container-faq-inner{
 width: 50%;
}}
</style>
