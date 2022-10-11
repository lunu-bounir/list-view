// simple
{
  const e = document.querySelector('simple-list-view');

  /* add(parts, name, value, selected) */
  for (let n = 1; n < 5; n += 1) {
    e.add([
      {name: 'item-' + n, part: 'one'},
      {name: n}
    ], 'item-' + n, n, n === 1);
  }
}

{
  const e = document.querySelector('list-view');

  /* add(parts, name, value, selected) */
  for (let n = 1; n < 10; n += 1) {
    e.add([
      {name: '', part: 'file'},
      {name: 'item-' + n},
      {name: '3'},
      {name: '4'}
    ], 'item-' + n, n, n === 5);
  }

  e.removeIndex(4);
  e.focus();

  e.addEventListener('change', e => {
    document.getElementById('value').value = e.target.value;
    document.getElementById('values').value = e.target.values;
    document.getElementById('selectedIndex').value = e.target.selectedIndex;
    document.getElementById('selectedValues').value = JSON.stringify(e.target.selectedValues, undefined, '  ');
  });
  e.dispatchEvent(new Event('change'));

  document.getElementById('headers').onclick = () => {
    e.setAttribute('headers', e.getAttribute('headers') === 'false');
  };
  document.getElementById('drag').onclick = () => {
    e.setAttribute('drag', e.getAttribute('drag') === 'false');
  };
  document.getElementById('icons').onclick = () => {
    const e = document.getElementById('icon');
    const b = e.getAttribute('width') === '0';
    e.setAttribute('width', b ? '32px' : '0');
    // e[b ? 'removeAttribute' : 'setAttribute']('hidden', true);
  };
  document.getElementById('update').onclick = () => {
    e.update(e.selectedIndex, 'name', 'new value');
    e.update(e.selectedIndex, 'value', 'new value');
    e.update(e.selectedIndex, 'part', 1, 'new value');
  };
}
