const userscontainer = document.getElementById('userscontainer');

async function loadUsers() {
    const responce = await fetch('https://holpenstudioback-production.up.railway.app/api/getUsers');
    const users = await responce.json();

    const userslist = users.map(user => `
        <div class="flex flex-col justify-center gap-2 p-4 border border-gray-300/10 bg-zinc-700/30 backdrop-blur-xl rounded-xl tracking-tight">
            <div class="font-medium text-gray-200 text-base">
                <h1>Id: ${user.id}</h1>
                <h2>Имя: ${user.first_name}</h2>
                <h3>Фамилия: ${user.last_name}</h3>
                <h4>TgId: ${user.tg_id}</h4>
                <h5>Роль: ${user.role}</h5>
            </div>
            <div class="flex flex-col gap-2">
                <div class="grid grid-cols-2 gap-1">
                    <button class="role-button flex justify-center items-center px-4 py-2 bg-blue-600 rounded-xl text-gray-100 text-sm font-semibold" data-tgid="${user.tg_id}" data-role="administrator">Admin</button>
                    <button class="role-button flex justify-center items-center px-4 py-2 bg-blue-600 rounded-xl text-gray-100 text-sm font-semibold" data-tgid="${user.tg_id}" data-role="support">Support</button>
                </div>
                <button class="role-button w-full flex justify-center items-center px-4 py-2 bg-red-500 rounded-xl text-gray-100 text-sm font-semibold" data-tgid="${user.tg_id}" data-role="user">Удалить роли</button>
            </div>
        </div>
        `).join('');

    userscontainer.innerHTML = userslist;
    attachRoleHandlers();
}

loadUsers();