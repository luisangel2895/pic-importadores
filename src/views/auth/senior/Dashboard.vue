<template lang="pug">
  v-container.pa-0(fluid)
    v-row(no-gutters)
      v-col(cols="12" md="2", style=" position:fixed;").white
        v-card.mx-auto(style="width:100%;").pa-0.elevation-5.menu-dashboard-left
          v-list(dense='')
            v-subheader.pa-0.justify-center.primary.accent2--text.mt-n2 Cuenta {{getTypeUser}}
            v-subheader.justify-center.terciary.accent2--text Bienvenido {{ getUserAuth.nombres }}
            v-list-item-group(v-model='selectedItem' color='primary')
              v-list-item(@click="goPedidos")
                v-list-item-icon
                  v-icon mdi-basket
                v-list-item-content
                  v-list-item-title Lista de Pedidos
              //- v-list-item(@click="goBalance")
              //-   v-list-item-icon
              //-     v-icon mdi-cash-multiple
              //-   v-list-item-content
              //-     v-list-item-title Ver Balance
              v-list-item(@click="goJuniors"  v-if="getTypeUser === 'senior'")
                v-list-item-icon
                  v-icon mdi-account-group
                v-list-item-content
                  v-list-item-title Control Juniors
              //- v-list-item(@click="goProfile")
              //-   v-list-item-icon
              //-     v-icon mdi-account
              //-   v-list-item-content
              //-     v-list-item-title Editar Perfil
      v-col(cols="2")
      v-col(cols="12" md="10")
        v-container(style="width:100%; position:fixed; z-index:3;").secondary.accent2--text Mis pedidos
        v-container.my-12
          v-data-table.elevation-1(:search='search' :headers='headers' :items='desserts' sort-by='calories' :single-expand="singleExpand" :expanded.sync="expanded" item-key="name" show-expand :items-per-page="5")
            template(v-slot:top='')
              v-toolbar(flat='')
                v-toolbar-title.mx-4 Lista de Pedidos
                v-divider.mx-4(inset='' vertical='')
                v-spacer
                template
                  v-text-field.mx-4(v-model='search' label='Buscar pedidos')
                v-dialog(v-model='dialog' max-width='500px')
                  //- template(v-slot:activator='{ on, attrs }')
                  //-   v-btn.mb-2(color='primary' dark='' v-bind='attrs' v-on='on')
                  //-     | New Item
                  v-card
                    v-card-title
                      span.text-h5 {{ formTitle }}
                    v-card-text
                      v-container
                        v-row
                          v-col(cols='12' sm='6' md='4')
                            v-text-field(v-model='editedItem.name' label='Dessert name')
                          v-col(cols='12' sm='6' md='4')
                            v-text-field(v-model='editedItem.calories' label='Calories')
                          v-col(cols='12' sm='6' md='4')
                            v-text-field(v-model='editedItem.fat' label='Fat (g)')
                          v-col(cols='12' sm='6' md='4')
                            v-text-field(v-model='editedItem.carbs' label='Carbs (g)')
                          v-col(cols='12' sm='6' md='4')
                            v-text-field(v-model='editedItem.protein' label='Protein (g)')
                    v-card-actions
                      v-spacer
                      v-btn(color='blue darken-1' text='' @click='close')
                        | Cancel
                      v-btn(color='blue darken-1' text='' @click='save')
                        | Save
                v-dialog(v-model='dialogDelete' max-width='500px')
                  v-card
                    v-card-title.text-h5 Are you sure you want to delete this item?
                    v-card-actions
                      v-spacer
                      v-btn(color='blue darken-1' text='' @click='closeDelete') Cancel
                      v-btn(color='blue darken-1' text='' @click='deleteItemConfirm') OK
                      v-spacer
            template(v-slot:item.actions='{ item }')
              v-icon.mr-2(small='' @click='editItem(item)')
                | mdi-pencil
              v-icon(small='' @click='deleteItem(item)')
                | mdi-delete
            template(v-slot:no-data='')
              v-btn(color='primary' @click='initialize')
                | Reset
            template(v-slot:expanded-item='{ headers, item }')
                td(:colspan='headers.length')
                  //-   | More info about {{ item.name }}
                  //- td
                  v-data-table(:items='products' :headers='headerProducts' hide-default-footer).mt-4
                  v-container.blue-grey.lighten-5.mb-4.d-flex.flex-row
                    .total-unidades.mx-4 Total: 3 unidades
                    .total-dinero.mx-4 Total: 15.00USD
                    .abonado.mx-4 10.00 USD
                    .Restante.mx-4 8.00 USD
                //- td k;lsajdf
            //- v-data-table.elevation-1(item-key="name" loading loading-text="Loading... Please wait")
          v-container.accent2
            .d-flex.flex-row.my-3
              .d-flex 9 ordenes
              v-spacer
              .d-flex 22 050 00 USD
            v-container.blue-grey.lighten-4
              .title Balance General
              .d-flex.flex-row
                .tatal-pagar.mr-8.text-center
                  .title-part-1 Total a pagar
                  .title-part-2(style="font-weight:bold;") 22.050.00 USD
                .total-abonado.d-flex.flex-column.mx-4.text-center
                  .title-part-1 Total abonado
                  .title-part-2(style="font-weight:bold;") 5000 USD
                .total-restante.d-flex.flex-column.mx-4.text-center
                  .title-part-1 Total restante
                  .title-part-2(style="font-weight:bold;") 17.050.00 USD
                v-spacer
                v-btn.secondary.mx-3 Ver detalle de mis abonos
                v-btn.secondary.mx-3 Cargar nuevo abono
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'JuniorDashboard',
  data: () => ({
    products: [
      {
        image: 'https://picsum.photos/200',
        name: 'Amigo Robotin',
        quantity: '1 unidad',
        price: '10 USD',
        url: 'http://localhost:8080/product/12008'
      },
      {
        image: 'https://picsum.photos/200',
        name: 'Amigo Robotin 2',
        quantity: '6 unidad',
        price: '20 USD',
        url: 'http://localhost:8080/product/12008'
      }
    ],
    headerProducts: [
      { text: 'Imagen', value: 'image' },
      { text: 'Nombre', value: 'name' },
      { text: 'Cantidad', value: 'quantity' },
      { text: 'Precio', value: 'price' },
      { text: 'Link', value: 'url' }
    ],
    selectedItem: 1,
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: 'Dessert (100g serving)',
        align: 'start',
        sortable: false,
        value: 'name'
      },
      { text: 'Calories', value: 'calories' },
      { text: 'Fat (g)', value: 'fat' },
      { text: 'Carbs (g)', value: 'carbs' },
      { text: 'Protein (g)', value: 'protein' },
      { text: 'Actions', value: 'actions', sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    },
    defaultItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    },
    search: '',
    expanded: [],
    singleExpand: false
  }),
  computed: {
    ...mapGetters(['getUserAuth', 'getTypeUser']),
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },
  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    }
  },
  created () {
    this.initialize()
  },
  mounted () {
    const altura = window.innerHeight
    const $menuleft = document.querySelector('.menu-dashboard-left')
    $menuleft.style.height = `${altura}px`
    console.log(this.getUserAuth)
  },
  methods: {
    goPedidos () {
      this.$router.push('/dashboard-senior')
    },
    goBalance () {
      this.$router.push('/dashboard-senior/balance')
    },
    goJuniors () {
      this.$router.push('/dashboard-senior/juniors')
    },
    goProfile () {
      this.$router.push('/dashboard-senior/profile')
    },
    initialize () {
      this.desserts = [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7
        }
      ]
    },

    editItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.desserts.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    }
  }
}
</script>
