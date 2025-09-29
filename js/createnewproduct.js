document.getElementById('addProductBtn').addEventListener('click', async () => {
    const newProduct = {
        icon: document.getElementById('icon').value,
        alt: document.getElementById('alt').value,
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        price: Number(document.getElementById('price').value)
    };

    try {
        const res = await fetch("https://holpenstudioback-production.up.railway.app/api/createProduct", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newProduct)
        })
        const data = await res.json();
        if(data.success) {
            alert(`Товар создан с ID: ${data.id}`);
        } else {
            alert("Ошибка: " + data.message);
        }
    } catch (err) {
        console.error(err)
    };
});