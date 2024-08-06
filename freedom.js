const usdtSelect = document.querySelector('.usdt')
const svgCopy = document.querySelector('.bibi-clipboard');

svgCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(usdtSelect.textContent)
    .then(() => {
        alert('Copied!');
    })
    .catch(err => {
        console.error(`Failed to copy: `, err);
    });
});