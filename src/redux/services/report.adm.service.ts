import {Endpoints} from '../../environment';
import apiService from './api.service';
import {configFormData} from './config.service';

export class ReportAdmService {
  static async getReportByTeacher(payload: any) {
    console.log(
      `${Endpoints.LIST_REPORT_BY_TEACHER}?myHandle=${payload.myHandle}&pageSize=${payload.pageSize}&page=${payload.page}`,
    );
    return await apiService.get(
      `${Endpoints.LIST_REPORT_BY_TEACHER}?myHandle=${payload.myHandle}&pageSize=${payload.pageSize}&page=${payload.page}`,
    );
  }

  static async getReportAccptByTeacher(payload: any) {
    console.log(
      `${Endpoints.LIST_REPORT_BY_TEACHER}?myHandle=${payload.myHandle}&pageSize=${payload.pageSize}&page=${payload.page}`,
    );
    return await apiService.get(
      `${Endpoints.LIST_REPORT_BY_TEACHER}?myHandle=${payload.myHandle}&pageSize=${payload.pageSize}&page=${payload.page}`,
    );
  }

  static async getDataDetailAccept(payload: string) {
    return await apiService.post(`${Endpoints.DETAIL_ACCEPT}${payload}`);
  }
}
