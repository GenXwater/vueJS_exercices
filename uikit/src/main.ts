import './style.css'
import Button from './components/Button.vue'
import Tag from './components/Tag.vue'

export default {
    install: (app: App<Element>) => {
        app.component('TukButton', Button)
        app.component('TukTag', Tag)
    }
}
