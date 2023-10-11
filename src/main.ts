import { createApp } from 'vue'
import './assets/style.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faTimes, faCog } from '@fortawesome/free-solid-svg-icons';
import App from './App.vue'

library.add(faCheck, faTimes, faCog)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
