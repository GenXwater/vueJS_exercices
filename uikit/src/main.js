import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Button from './components/Button.vue'

export default {
    install: (app: App<Element>) => {
        app.component('TukeButton', Button)
    }
}
