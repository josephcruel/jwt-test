document.getElementById('registerForm').addEventListener('submit', async function (e) {
    e.preventDefault()

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    })

    const data = await response.json()
    if (response.ok) {
        alert('Registration Successful')
    } else {
        alert(`Registration Failed: ${data.message}`)
    }
})

document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault()

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })

    const data = await response.json()

    if (response.ok) {
        alert('Login Successful')
        // Save the token in mongodb
        window.location.href = '/profile' // The profile page
    } else {
        alert('Login Failed')
    }
})