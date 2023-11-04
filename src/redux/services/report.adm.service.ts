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

  static async postDoneReport(payload: any) {
    console.log(`${Endpoints.DONE_REPORT}${payload.key}`, payload);
    return await apiService.post(`${Endpoints.DONE_REPORT}${payload.key}`, {
      from: payload.from,
      description: payload.description,
    });
  }
  static async postCancelReport(payload: any) {
    const requestData = {
      from: payload.from,
      description: payload.description,
    };
    return await apiService.delete(`${Endpoints.CANCEL_REPORT}${payload.key}`, {
      data: requestData,
    });
  }
}
