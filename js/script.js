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
document.addEventListener('DOMContentLoaded', () => {
    const userColor = localStorage.getItem('userColor');
    if (userColor) {
        document.body.style.backgroundColor = userColor;
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        const header = section.querySelector('h2');
        header.addEventListener('click', () => {
            const isOpen = section.classList.contains('open');

            // Закрыть все секции
            sections.forEach(sec => {
                sec.classList.remove('open');
                sec.querySelector('.arrow').innerHTML = '&#9660;'; // Стрелка вниз
                sec.querySelector('.section-content').style.height = '0'; // Устанавливаем высоту 0
            });

            // Открыть текущую секцию
            if (!isOpen) {
                section.classList.add('open');
                header.querySelector('.arrow').innerHTML = '&#9650;'; // Стрелка вверх
                const content = section.querySelector('.section-content');
                content.style.height = `${content.scrollHeight}px`; // Устанавливаем высоту по содержимому
            }
        });
    });
});
