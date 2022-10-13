import axios from 'axios';

const TRADE_API_BASE_TUTORIAL = "http://localhost:8080/trades";

class TradeService {

    getTrades(){

        return axios.get(TRADE_API_BASE_TUTORIAL);

    }

}

export default new TradeService()