import request from '@/utils/request';

export function getFormList() {
  return request({
    url: '/form/list',
    method: 'get'
  });
}
