const e = document.querySelector('list-view');

/* add(parts, name, value, selected) */
e.add([
  {name: '', part: 'file'},
  {name: 'zero'},
  {name: '3'},
  {name: '4'}
], 'zero', 0);
e.add([
  {name: '', part: 'file'},
  {name: 'one'},
  {name: '3'},
  {name: '4'}
], 'one', 1);
e.add([
  {name: '', part: 'file'},
  {name: 'two'},
  {name: '3'},
  {name: '4'}
], 'two', 2);
e.add([
  {name: '', part: 'file'},
  {name: 'three'},
  {name: '3'},
  {name: '4'}
], 'three', 3);
e.add([
  {name: '', part: 'file'},
  {name: 'four'},
  {name: '3'},
  {name: '4'}
], 'four', 4);
e.add([
  {name: '', part: 'file'},
  {name: 'five'},
  {name: '3'},
  {name: '4'}
], 'five', 5, true);

e.removeIndex(4);
e.focus();

e.addEventListener('change', e => {
  document.getElementById('value').value = e.target.value;
  document.getElementById('selectedIndex').value = e.target.selectedIndex;
  document.getElementById('selectedValues').value = JSON.stringify(e.target.selectedValues, undefined, '  ');
});
e.dispatchEvent(new Event('change'));
