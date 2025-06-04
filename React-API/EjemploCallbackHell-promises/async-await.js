// const fetchUserData = async()=>{};
async function fetchUserData() {
  try {
    // Obtener el usuario
    const userResponse = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await userResponse.json();
    console.log("Usuario:", user);

    // Obtener los posts del usuario
    const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
    const posts = await postsResponse.json();
    console.log("Posts del usuario:", posts);

    if (posts.length === 0) {
      throw new Error("No hay posts");
    }

    // Obtener comentarios del primer post
    const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${posts[0].id}`);
    const comments = await commentsResponse.json();
    console.log("Comentarios del primer post:", comments);

  } catch (error) {
    console.error("Error en la cadena:", error);
  }
}

fetchUserData();
