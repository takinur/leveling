import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Ripple from 'primevue/ripple'

import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup'
import Row from 'primevue/row'
import InputText from 'primevue/inputtext'
import Checkbox from 'primevue/checkbox'
import TieredMenu from 'primevue/tieredmenu'
import Chart from 'primevue/chart'

import './assets/main.css'

import 'primevue/resources/themes/saga-blue/theme.css' //theme
import 'primevue/resources/primevue.min.css' //core css
import 'primeicons/primeicons.css' //icons

const app = createApp(App)

app.use(router)
app.use(PrimeVue, { ripple: true })

app.directive('ripple', Ripple)

app.component('PrimeButton', Button)
app.component('DataTable', DataTable)
app.component('TableColumn', Column)
app.component('TableColumnGroup', ColumnGroup)
app.component('TableRow', Row)
app.component('InputText', InputText)
app.component('PrimeCheckbox', Checkbox)
app.component('TieredMenu', TieredMenu)
app.component('PrimeChart', Chart)

app.mount('#app')
