import UI from './ui.js'

UI.getAllButton.addEventListener('click',  function () {

    UI.getAll()
})    

UI.searchButton.onclick = () => {
    
UI.search(UI.searchInput)

}
    
