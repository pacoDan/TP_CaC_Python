const getNombre = (idPost) => {
    // hacemos la solicitud a la API...
    fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
        // la API responde en formato JSON
        .then(res => {
            return res.json()
        })
        //.then(res => {console.log(res)})
        
        // Pedimos el userID de ese posteo
        .then(post => {
            console.log("User ID: " + post.userId)
            fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
                .then(res => {
                    return res.json()
                })
                .then(user => {
                    console.log("User Name: " + user.name)
                })
        })
        
}
getNombre(85) // llamada a la función