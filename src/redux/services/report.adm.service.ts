import {Endpoints} from '../../environment';
import apiService from './api.service';
import {configFormData} from './config.service';

export class ReportAdmService {
  static async getReportByTeacher(payload: any) {
    console.log(Endpoints.LIST_REPORT_BY_TEACHER, payload);
    return await apiService.get(
      `${Endpoints.LIST_REPORT_BY_TEACHER}?myHandle=${payload.myHandle}&pageSize=${payload.pageSize}&page=${payload.page}`,
    );
  }
}
