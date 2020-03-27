import Mock from 'mockjs';

import s1 from './data/schema1';
import notice from './data/notice'
Mock.setup({
  timeout: '300-600',
});

Mock.mock(`/form/list`, 'get', () => {
  let list = [];
  for (let i = 0; i < 15; i++) {
    list.push(Mock.mock({
      id:i,
      name: `问卷${i}`,
      startTime: '2020-03-24',
      endTime: '2020-03-27',
      description: `请认真填写问卷`,
      schema: JSON.stringify(s1),
    }));
  }
  return {
    total: 5,
    pageSize: 10,
    data: list,
  };
});

Mock.mock(`/notice/list`, 'get', () => {
  return {
    data: notice,
  };
});

