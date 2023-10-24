import {Endpoints} from '../../environment';
import apiService from './api.service';

export class ReportService {
  static async getHistoryTeacher(payload: number) {
    console.log(Endpoints.HISTORY_REPORT_TEACHER, payload);
    return await apiService.get(
      `${Endpoints.HISTORY_REPORT_TEACHER}?page=${payload}`,
    );
  }
}
