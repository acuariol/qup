import Mock from 'mockjs';

Mock.setup({
  timeout: '300-600',
});

Mock.mock(`/user/getTable`, 'get', () => {
  let list = [];
  for (let i = 0; i < 5; i++) {
    list.push(Mock.mock({
      id: '@increment',
      name: Mock.mock('@cname'),
      username: Mock.mock('@last'),
      type: [0, 2],
      checkbox: [0, 1],
      'number|0-100': 0,
      datetime: 1532932422071,
      'sex|0-1': 0,
      moreSelect: [0, 1],
      'grade': 0,
      address: Mock.mock('@cparagraph(1, 3)'),
      check: [1, 3, 4],
    }));
  }
  return {
    data: {
      total: 11,
      pageSize: 10,
      tableData: list,
    },
  };
});
