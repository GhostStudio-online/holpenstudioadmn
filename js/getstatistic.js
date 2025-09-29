async function getUserCount() {
    try {
        const response = await fetch('https://holpenstudioback-production.up.railway.app/api/getUsers');
        if (response.ok) {
            const users = await response.json();
            const usersCount = users.length;
            document.getElementById('usersCount').innerHTML = `<span>${usersCount}</span>`;
        } else {
            document.getElementById('usersCount').innerHTML = 'Ошибка при загрузке данных.';
        }
    } catch (error) {
        console.error('Ошибка при запросе:', error);
        document.getElementById('userCount').innerHTML = 'Ошибка при загрузке данных.';
    }
}

async function getOrdersCount() {
    try {
        const response = await fetch('https://holpenstudioback-production.up.railway.app/api/orders');
        if (response.ok) {
            const orders = await response.json();
            const ordersCount = orders.length;
            document.getElementById('ordersCount').innerHTML = `<span>${ordersCount}</span>`;
        } else {
            document.getElementById('ordersCount').innerHTML = 'Ошибка при загрузке данных.';
        }
    } catch (error) {
        console.error('Ошибка при запросе:', error);
        document.getElementById('ordersCount').innerHTML = 'Ошибка при загрузке данных.';
    }
}

async function getProductsCount() {
    try {
        const response = await fetch('https://holpenstudioback-production.up.railway.app/api/products');
        if (response.ok) {
            const products = await response.json();
            const productsCount = products.length;
            document.getElementById('productsCount').innerHTML = `<span>${productsCount}</span>`;
        } else {
            document.getElementById('productsCount').innerHTML = 'Ошибка при загрузке данных.';
        }
    } catch (error) {
        console.error('Ошибка при запросе:', error);
        document.getElementById('productsCount').innerHTML = 'Ошибка при загрузке данных.';
    }
}