import request from '@/utils/request';

export function getFormList() {
  return request({
    url: '/user/getTable5',
    method: 'get'
  });
}
