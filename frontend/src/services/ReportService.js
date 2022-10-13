import axios from 'axios';

const REPORT_API_BASE_TUTORIAL = "http://localhost:8080/reports";

class ReportService {

    getReports(){

        return axios.get(REPORT_API_BASE_TUTORIAL);

    }

}

export default new ReportService()