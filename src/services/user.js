import request from '@/utils/request';

export function getNotice() {
  return request({
    url: '/notice/list',
    method: 'get'
  });
}

export function getUserInfo() {
  return request({
    url: '/user/info',
    method: 'get'
  });
}
