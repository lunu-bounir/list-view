// simple
{
  const e = document.querySelector('simple-list-view');

  /* add(parts, name, value, selected) */
  for (let n = 1; n < 5; n += 1) {
    const o = e.option([
      {name: 'item-' + n, part: 'one'},
      {name: n}
    ], 'item-' + n, n, n === 1);
    o.insert(0);
  }

  e.addEventListener('change', () => {
    console.log('selected entries', e.selectedOptions);
  });
}

{
  const e = document.querySelector('list-view');

  /* add(parts, name, value, selected) */
  for (let n = 1; n < 10; n += 1) {
    const o = e.option([
      {name: '', part: 'file'},
      {name: 'item-' + n},
      {name: '3'},
      {name: n}
    ], 'item-' + n, n, n === 5);
    o.insert();
  }

  e.removeIndex(4);
  e.focus();

  e.addEventListener('change', e => {
    document.getElementById('value').value = e.target.value;
    document.getElementById('selectedIndex').value = e.target.selectedIndex;
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
    for (const option of e.selectedOptions) {
      option._internal.option.name =
      option._internal.div.children[2].textContent = 'new value';
    }
  };
  document.getElementById('sort-za').onclick = () => {
    const v = e.options.sort((a, b) => Number(b.value) - Number(a.value));
    v.forEach((a, n) => a.insert(n));
  };
}
