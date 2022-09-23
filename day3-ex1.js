const URL = "https://jsonplaceholder.typicode.com/users/"
document.getElementById("fetch-user").onclick = fetchUser;
document.getElementById("fetch-all-users").onclick = fetchAllUsers;

function fetchUser(){
    fetch(URL)
        .then((r) => {
            if (!r.ok) {
                return Promise.reject("The user could not be found in the system")
            }
            return r.json()
        })
    /*.then(users => {
        const con = document.getElementById("single-user")

    })
    .catch(e => {
        console.error(e)
    })*/
}

function fetchAllUsers(){
    document.getElementById("all-users").style.display = "none"
    fetch(URL)
        .then(resolve => resolve.json())
        .then(users => {
            const tableRows = users.map(user => `
                    <tr>
                        <td>${user.name} </td>
                        <td>${user.phone} </td>
                    </tr>
                `).join("")
            document.getElementById("all-users").style = "block"
            document.getElementById("tbody2").innerHTML = tableRows
        })
}