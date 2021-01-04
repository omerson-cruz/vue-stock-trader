import Vue from 'vue'

export const loadData = ({commit}) => {
    Vue.http.get('data.json')
        .then(response => {
            return response.json()
        })
        .then(extracted => {
             if (extracted) {
                 const stocks = extracted.stocks
                 const funds = extracted.funds
                 const stockPortfolio = extracted.stockPortfolio

                 const portfolio = {
                     stockPortfolio,
                     funds
                 }

                 commit('SET_STOCKS', stocks)
                 commit('SET_PORTFOLIO', portfolio)
             }
        })
}