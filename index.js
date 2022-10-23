// submitData function, takes two strings as arguments, one representing a user's name, and the other an email.
// write so the fetch() is returned inside submitData

function submitData(user, userEmail){
    const userData = {
        name: user,
        email: userEmail
    }
    const configInfo = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userData),
    };
    return fetch("http://localhost:3000/users", configInfo)
    .then(res => res.json())
    .then(function updateDom(object){
        let body = document.querySelector('body')
        body.innerHTML = `
            <div class="user_data">
                <h1>${user}</h1>
                <h2>${userEmail}</h2>
                <h3>${object.id}</h3>
            </div>`
    })
    .catch(function (error){
        alert("You don did it now!")
        let badbody = document.querySelector('body')
        badbody.innerHTML = error.message
})
}