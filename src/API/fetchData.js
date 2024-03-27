
export async function getAllTodos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos = await response.json()

    return todos
}

export async function getAllUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()

    return users
}

export async function getTodosByUserId(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
    const todos = await response.json()

    return todos
}

export async function getPostsByUserId(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    const posts = await response.json()

    return posts
}