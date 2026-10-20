const dialog = document.getElementById('info-dialog');
const title = document.getElementById('dialog-title');
const copy = document.getElementById('dialog-copy');
document.querySelectorAll('[data-book]').forEach(button => {
  button.addEventListener('click', () => {
    title.textContent = button.dataset.book;
    copy.textContent = button.dataset.book === 'Unspoken Thoughts'
      ? 'Thanks for your interest in Unspoken Thoughts. This website is currently a demo; online payment and secure eBook delivery are not connected yet.'
      : 'This collection is planned for a future release. Contact details and book availability will be added before launch.';
    dialog.showModal();
  });
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
document.getElementById('dialog-ok').addEventListener('click', () => dialog.close());
document.getElementById('year').textContent = new Date().getFullYear();
