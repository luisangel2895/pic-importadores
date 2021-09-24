import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import auth from './modules/auth'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    asesorEnLinea: 'https://wa.link/br2vsl',
    mobileHeight: null,
    showMobilePop: false,
    showexitPop: false,
    showCover: false,
    countryUser: null,
    isMobile: null,
    showLoginCard: false,
    showShoppingCart: false,
    productsCart: [],
    totalCart: 0,
    campaigns: [],
    campaign: null,
    rubros: [],
    catalogs: [],
    catalog: null,
    products: [],
    product: null,
    loaderItemCmapaign: null,
    loaderitemProduct: null,
    showCatalogsMobile: false,
    campaignsStock: [],
    importadores: []
  },
  getters: {
    getAsesorEnLinea: state => state.asesorEnLinea,
    getMobileHeight: state => state.mobileHeight,
    getMobilePop: state => state.showMobilePop,
    getExitPop: state => state.showexitPop,
    getShowCover: state => state.showCover,
    getIsMobile: state => state.isMobile,
    getCountryUser: state => state.countryUser,
    getShowLoginCard: state => state.showLoginCard,
    getCampaigns: state => state.campaigns,
    getCampaignSelected: state => state.campaign,
    getRubros: state => state.rubros,
    getCatalogs: state => state.catalogs,
    getCatalogSelected: state => state.catalog,
    getProducts: state => state.products,
    getProductToDetail: state => state.product,
    getLoaderItemCmapaign: state => state.loaderItemCmapaign,
    getLoaderItemProduct: state => state.loaderitemProduct,
    getSHowcatalogMobile: state => state.showCatalogsMobile,
    getCampaignsStock: state => state.campaignsStock,
    getImportadores: state => state.importadores
  },
  mutations: {
    SET_MOBILE_HEIGHT (state, payload) {
      state.mobileHeight = payload
    },
    SET_EXIT_POP (state, payload) {
      state.showexitPop = payload
    },
    SET_IS_MOBILE_USER (state, payload) {
      state.isMobile = payload
    },
    SET_COUNTRY_USER (state, payload) {
      state.countryUser = payload
    },
    SHOW_LOGIN_CART (state, payload) {
      state.showLoginCard = payload
    },
    SHOW_SHOPPING_CART (state, payload) {
      state.showShoppingCart = payload
    },
    ADD_PRODUCT_CART (state, payload) {
      const itemExisted = state.productsCart.find(item => item.id === payload.product.id)
      if (!itemExisted) {
        const itemCart = payload.product
        itemCart.quantity = payload.quantity
        state.productsCart.push(itemCart)
        console.log(state.productsCart)
      } else {
        itemExisted.quantity = payload.quantity
        console.log(state.productsCart)
      }
    },
    REMOVE_PRODUCT_CART (state, payload) {
      state.productsCart = state.productsCart.filter((product) => {
        return product.id !== payload.id
      })
      console.log(state.productsCart)
    },
    UPDATE_TOTAL_CART (state) {
      let total = 0
      state.productsCart.forEach(item => {
        total += parseFloat(item.precio_venta) * parseFloat(item.quantity)
      })
      state.totalCart = total
    },
    SET_CAMAPAIGNS (state, payload) {
      state.campaigns = payload
    },
    SET_CAMPAIGN_SELECTED (state, payload) {
      state.campaign = payload
    },
    SET_RUBROS (state, payload) {
      state.rubros = payload
    },
    SET_CATALOGS (state, payload) {
      state.catalogs = payload
    },
    SET_CATALOG_SELECTED (state, payload) {
      state.catalog = payload
    },
    SET_PRODUCTS (state, payload) {
      state.products = payload
    },
    SET_PRODUCT_DETAIL (state, payload) {
      state.product = payload
    },
    STATUS_CATALOG_MOBILE (state, payload) {
      state.showCatalogsMobile = payload
    },
    STATUS_SHOW_COVER (state, payload) {
      state.showCover = payload
    },
    STATUS_MOBILE_POPUP (state, payload) {
      state.showMobilePop = payload
    },
    SET_CAMPAIGNS_STOCK (state, payload) {
      state.campaignsStock = payload
    },
    SET_IMPORTADORES (state, payload) {
      state.importadores = payload
    }
  },
  actions: {
    async getCampaignsStockAPI ({ commit }) {
      const campaigns = await axios('/campanastock')
      commit('SET_CAMPAIGNS_STOCK', campaigns.data)
    },
    async getImportadoresAPI ({ commit }, id) {
      const importadores = await axios(`/importadores_stock/${id}`)
      commit('SET_IMPORTADORES', importadores.data)
    },
    async getCampaignsAPI ({ commit, state }) {
      state.loaderItemCmapaign = true
      const campaigns = await axios('campana')
      commit('SET_CAMAPAIGNS', campaigns.data)
      state.loaderItemCmapaign = false
    },
    async setCampaignSelected ({ commit, state }, idCampaign) {
      const campaign = state.campaigns.filter((campaign) => {
        return campaign.id === idCampaign
      })
      commit('SET_CAMPAIGN_SELECTED', campaign)
    },
    async getRubrosAPI ({ commit }, idCampaign) {
      const rubros = await axios(`campana/rubros/${idCampaign}`)
      commit('SET_RUBROS', rubros.data)
    },
    async getCatalogsAPI ({ commit }, idCampaign) {
      const catalogs = await axios(`/catalogos/p/${idCampaign}`)
      commit('SET_CATALOGS', catalogs.data)
    },
    async setCatalogSelected ({ commit, state }, idCatalog) {
      const catalogSelected = state.catalogs.filter((catalog) => {
        return catalog.id === idCatalog
      })
      commit('SET_CATALOG_SELECTED', catalogSelected)
    },
    async getProductsCatalogAPI ({ commit, state }, idCatalog) {
      state.loaderitemProduct = true
      const products = await axios(`articulos/pag/${idCatalog}/60/1`)
      state.numberItemsCatalog = products.data.length
      commit('SET_PRODUCTS', products.data)
      state.loaderitemProduct = false
    }
  },
  modules: {
    auth
  },
  plugins: [createPersistedState()]
})
