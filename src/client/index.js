import { analysis} from './js/analysisText.js'


//for style
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'


window.addEventListener('DOMContentLoaded', () => {
    const artical = document.querySelector('#articaltext').value;
    const lang = document.getElementById('lang').value
    const form = document.getElementById('articalform')
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        Client.analysis(artical , lang)
    })
});




export{
    analysis
}


