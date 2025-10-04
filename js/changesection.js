const pageSections = document.querySelectorAll('main section');
const hdbtns = document.querySelectorAll('.hd-btns');

function changesection(id) {
    pageSections.forEach((section) => { section.classList.add('hidden'); section.classList.remove('active')});
    document.getElementById(id)?.classList.remove('hidden');
    document.getElementById(id)?.classList.add('active');

    // сбрасываем цвет всем
    hdbtns.forEach(btn => {
        btn.classList.remove('text-blue-600');
        btn.classList.add('text-white');
    });

    // активной кнопке даём синий
    const activeBtn = document.querySelector(`[data-target="${id}"]`);
    activeBtn?.classList.remove('text-white');
    activeBtn?.classList.add('text-blue-600');

    if (id === 'statistic') {
        getUserCount();
        getOrdersCount();
        getProductsCount();
    } else if (id === 'users') {
        loadUsers();
    }
}

hdbtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.target;
        changesection(target);
    });
});

changesection('products');