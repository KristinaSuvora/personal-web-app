
document.addEventListener('DOMContentLoaded', () => {
    const colorPalette = document.getElementById('colorPalette');
    const colors = ['#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9', '#92A8D1'];
    colors.forEach(color => {
        const div = document.createElement('div');
        div.style.backgroundColor = color;
        div.classList.add('color-box');
        div.addEventListener('click', () => {
            document.body.style.backgroundColor = color;
        });
        colorPalette.appendChild(div);
    });
});
