function showPopup(message, isError = false) {
    const popup = document.getElementById('popup');
    const icon = isError 
        ? '<i class="fa-solid fa-triangle-exclamation text-red-300"></i>' 
        : '<i class="fa-solid fa-check text-green-300"></i>';

    popup.innerHTML = `
        <h3 class="text-sm font-semibold tracking-tight flex items-center gap-2">
            ${icon} <span class="${isError ? 'text-red-300' : 'text-green-300'}">${message}</span>
        </h3>
    `;

    popup.classList.add('show');

    setTimeout(() => {
        popup.classList.remove('show');
    }, 2000);
}

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
                    showPopup('Роль обновлена!');
                    loadUsers();
                } else {
                    showPopup('Ошибка при изменении роли!', true);
                }
            } catch (err) {
                console.error(err);
                showPopup('Ошибка при изменении роли!', true);
            }
        });
    });
}
