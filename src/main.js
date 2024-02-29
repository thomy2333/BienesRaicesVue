import { createApp } from 'vue'
import { createPinia } from 'pinia'
//Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//vuefire
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './config/firebase'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css'

const app = createApp(App)

//Vuetify
const vuetify = createVuetify({
    components,
    directives
})

//firebase
app.use(VueFire, {
    firebaseApp,
    modules: [VueFireAuth()]
})
app.use(vuetify)
app.use(createPinia())
app.use(router)

app.mount('#app')
