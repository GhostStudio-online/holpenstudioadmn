function attachRoleHandlers() {
    const roleButtons = document.querySelectorAll('.role-button');
    roleButtons.forEach(button => {
        button.addEventListener('click', async (event) => {
            const userId = event.target.getAttribute('data-tgid');
            const newRole = event.target.getAttribute('data-role');

            try {
                const response = await fetch('https://holpenstudioback-production.up.railway.app/api/users/change/role', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ id: userId, role: newRole }),
                });

                const data = await response.json();
                if (data.success) {
                    alert(`Роль пользователя ${userId} изменена на ${newRole}`);
                    loadUsers();
                } else {
                    alert('Ошибка при изменении роли');
                }
            } catch (err) {
                console.error('Ошибка при изменении роли:', err);
            }
        });
    });
}

