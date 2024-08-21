// import './assets/main.css'
// import '@/assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })

app.component('DataTable', DataTable)
// eslint-disable-next-line vue/multi-word-component-names
app.component('Column', Column)

app.mount('#app')
