import Ajax from './ajaxService.js'
export default class UI {
    static url
    static searchName
    static allcountriesURL = 'https://restcountries.eu/rest/v2/all?field=name;topLevelDomain;capital;currencies;borders;flag'
    static tableLocation = document.getElementById('tableOutput')
    static searchURL = 'https://restcountries.eu/rest/v2/name/'

    static getAll() {
        // UI.url= UI.allcountriesURL
        Ajax.getFromSite(UI.allcountriesURL)

    }

    static get getAllButton(){
        return document.getElementById('getAllBtn')
    }

    static get searchButton(){
        return document.getElementById('search')
    }

    static get searchInput(){
        return document.getElementById('searchInput').value
    }



    static search(searchText){
        Ajax.getFromSite(UI.searchURL+ searchText)

    }

    static convertToHtmlTable(JsonObj){
       
        let html=`
     <table>
        <tr>
            <th>Country</th>
            <th> Top Leve Domain</th>
            <th>Capital</th>
            <th>Currencies</th>
            <th>Borders</th>
            <th>Flag</th>
        </tr>`
        JsonObj.forEach(obj => {
            html += `
            <tr>
            <td>${obj.name}</td>
            <td>${obj.topLevelDomain}</td>
            <td>${obj.capital}</td>
            <td>  code : ${obj.currencies[0].code} , name : ${obj.currencies[0].name} , symbol: ${obj.currencies[0].symbol}</td>
            <td>${obj.borders}</td>
            <td> <img src=${obj.flag} ></img></td>
        </tr>`
            
        });
       
     html +=`</table>`

     return html
    }

    static showTable(html){
        UI.tableLocation.innerHTML = html


    }




}