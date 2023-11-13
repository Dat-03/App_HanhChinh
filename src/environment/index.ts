export const BASE_URL = 'https://wflow.space';

export enum Endpoints {
  //AUTH
  LOGIN_ENDPOINT = '/api/login',
  REFRESH_TOKEN = '/api/refresh-token',
  HISTORY_REPORT_TEACHER = '/api/get-teacher-history-reports',
  CREAT_REPORT_TEACHER = '/api/create-report',
  LIST_REPORT_BY_TEACHER = '/api/get-list-report',
  DETAIL_REPORT = '/api/get-detail-report/',
  DETAIL_ACCEPT = '/api/accept-report/',
  DETAIL_TEACHER = '/api/teacher-get-detail-report/',
  DONE_REPORT = '/api/done-report/',
  CANCEL_REPORT = '/api/cancel-report/',
  HISTORY_ADM = '/api/get-admin-history-reports',
}
