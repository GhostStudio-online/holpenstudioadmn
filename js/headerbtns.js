const hdsections = document.getElementById('hd-sections');

const sections = [
    { name: 'Статистика', icon: 'fa-chart-simple', data: 'statistic' },
    { name: 'Пользователи', icon: 'fa-users', data: 'users' },
    { name: 'Товары', icon: 'fa-cart-shopping', data: 'products' },
    { name: 'Создать товар', icon: 'fa-cart-plus', data: 'create' }
];

const sectionlist = sections.map(section => `<div class="flex flex-col justify-center items-center gap-1 hd-btns transition-color duration-300" data-target="${section.data}">
    <i class="fa-solid ${section.icon} text-lg"></i>
    <h4 class="text-sm font-normal tracking-tight">${section.name}</h4>
</div>`).join('');

hdsections.innerHTML = sectionlist;