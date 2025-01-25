document.addEventListener('DOMContentLoaded', () => {
    // Настройка цветовой палитры
    const colorPalette = document.getElementById('colorPalette');
    const colors = ['#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9', '#92A8D1'];
    colors.forEach(color => {
        const div = document.createElement('div');
        div.style.backgroundColor = color;
        div.classList.add('color-box');
        div.addEventListener('click', () => {
            document.body.style.backgroundColor = color;
            localStorage.setItem('userColor', color); // Сохраняем выбранный цвет
        });
        colorPalette.appendChild(div);
    });

    // Применение сохранённого цвета при загрузке страницы
    const userColor = localStorage.getItem('userColor');
    if (userColor) {
        document.body.style.backgroundColor = userColor;
    }

    // Код для переключения содержимого страниц
    const menuItems = document.querySelectorAll('.menu-item'); // Элементы меню
    const contentArea = document.getElementById('content'); // Контейнер для содержимого

    menuItems.forEach(menuItem => {
        menuItem.addEventListener('click', () => {
            const page = menuItem.getAttribute('data-page'); // Получаем страницу из data-page
            loadPage(page);
        });
    });

    function loadPage(page) {
        fetch(`${page}.html`) // Загружаем страницу
            .then(response => {
                if (!response.ok) throw new Error(`Страница ${page}.html не найдена`);
                return response.text();
            })
            .then(html => {
                contentArea.innerHTML = html; // Вставляем содержимое страницы
            })
            .catch(error => {
                console.error('Ошибка загрузки страницы:', error);
                contentArea.innerHTML = `<p>Не удалось загрузить страницу ${page}.</p>`;
            });
    }
});

