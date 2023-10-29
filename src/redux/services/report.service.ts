import {Endpoints} from '../../environment';
import apiService from './api.service';
import {configFormData} from './config.service';

export class ReportService {
  static async getHistoryTeacher(payload: number) {
    console.log(Endpoints.HISTORY_REPORT_TEACHER, payload);
    return await apiService.get(
      `${Endpoints.HISTORY_REPORT_TEACHER}?page=${payload}`,
    );
  }

  static async getCreactReport() {
    console.log(Endpoints.CREAT_REPORT_TEACHER);
    return await apiService.get(`${Endpoints.CREAT_REPORT_TEACHER}`);
  }

  static async postDataReport(payload: any) {
    console.log(payload);

    return await apiService.post(
      Endpoints.CREAT_REPORT_TEACHER,
      payload,
      configFormData,
    );
  }
}