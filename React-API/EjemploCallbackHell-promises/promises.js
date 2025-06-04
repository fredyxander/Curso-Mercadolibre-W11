fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => {
    const calc = 12*5;
    console.log("calc", calc);
    return response.json()
  })
  .then(user => {
    console.log("Usuario:", user);
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
  })
  .then(response => response.json())
  .then(posts => {
    console.log("Posts del usuario:", posts);
    if (posts.length === 0) throw new Error("No hay posts");
    return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${posts[0].id}`);
  })
  .then(response => response.json())
  .then(comments => {
    console.log("Comentarios del primer post:", comments);
  })
  .catch(error => console.error("Error en la cadena:", error));

