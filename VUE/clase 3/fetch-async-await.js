// Asincrónico
const getNombre = async (idPost) => {
    try {
        const resPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
        const post = await resPost.json()
        console.log("User ID: " + post.userId)

        const resUser = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        const user = await resUser.json()
        console.log("User Name: " + user.name)
    } catch (error) {
        console.log('Ocurrió un error grave', error)
    }
}
getNombre(85) // llamada a la función