import options from './ssq';

// 该函数用于转换 ssq_flat.jon
function convertData(obj) {
  if (!obj) return [];
  const d2 = [];
  Object.keys(obj).forEach(key => {
    let init = {
      label: obj[key],
      value: obj[key],
      id: key,
      children: convertData(options[key]),
    };
    if (convertData(options[key]).length === 0) {
      delete init.children;
    }
    d2.push(init);
  });
  return d2;
}

// 保存json
function saveJSON(data, filename) {
  if (!data) {
    alert('保存的数据为空');
    return;
  }
  if (!filename)
    filename = `${new Date().getTime()}.json`;
  if (typeof data === 'object') {
    data = JSON.stringify(data, undefined, 4);
  }
  let blob = new Blob([data], { type: 'text/json' }),
    e = document.createEvent('MouseEvents'),
    a = document.createElement('a');
  a.download = `${filename}.json`;
  a.href = window.URL.createObjectURL(blob);
  a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
  e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  a.dispatchEvent(e);

}

export { convertData, saveJSON };
