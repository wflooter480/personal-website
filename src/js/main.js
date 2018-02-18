const foo = () => {
  return 'test';
}

console.log(foo());

document.addEventListener('DOMContentLoaded', () => {
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });
});

