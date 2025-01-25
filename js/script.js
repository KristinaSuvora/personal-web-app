document.addEventListener('DOMContentLoaded', () => {
    // Работа с блоками секций
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        const header = section.querySelector('h2');
        const content = section.querySelector('.section-content');

        header.addEventListener('click', () => {
            const isOpen = section.classList.contains('open');

            // Закрываем все секции
            sections.forEach(sec => {
                sec.classList.remove('open');
                sec.style.height = '50px'; // Высота заголовка
                sec.querySelector('.section-content').style.opacity = '0';
            });

            // Если секция не была открыта, открываем ее
            if (!isOpen) {
                section.classList.add('open');
                section.style.height = 'auto'; // Автоматическая высота
                content.style.opacity = '1';
            }
        });
    });

    // Сохранение цвета в локальном хранилище
    const colorPalette = document.getElementById('colorPalette');
    const colors = ['#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9', '#92A8D1'];

    if (colorPalette) {
        colors.forEach(color => {
            const div = document.createElement('div');
            div.style.backgroundColor = color;
            div.classList.add('color-box');
            div.addEventListener('click', () => {
                document.body.style.backgroundColor = color;
                localStorage.setItem('userColor', color);
            });
            colorPalette.appendChild(div);
        });
    }

    const userColor = localStorage.getItem('userColor');
    if (userColor) {
        document.body.style.backgroundColor = userColor;
    }
});
