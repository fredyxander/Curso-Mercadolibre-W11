// import { XMLHttpRequest } from "xmlhttprequest";

// const getUser = (userId, callback)=> {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", `https://jsonplaceholder.typicode.com/users/${userId}`);
//   xhr.onload = function () {
//     if (xhr.status === 200) {
//       const user = JSON.parse(xhr.responseText);
//       callback(null, user);
//     } else {
//       callback(new Error("Error al obtener el usuario"));
//     }
//   };
//   xhr.send();
// }

// const getPostsByUser = (userId, callback)=> {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", `https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
//   xhr.onload = function () {
//     if (xhr.status === 200) {
//       const posts = JSON.parse(xhr.responseText);
//       callback(null, posts);
//     } else {
//       callback(new Error("Error al obtener los posts"));
//     }
//   };
//   xhr.send();
// }

// const getCommentsByPost =(postId, callback)=> {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", `https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
//   xhr.onload = function () {
//     if (xhr.status === 200) {
//       const comments = JSON.parse(xhr.responseText);
//       callback(null, comments);
//     } else {
//       callback(new Error("Error al obtener los comentarios"));
//     }
//   };
//   xhr.send();
// }

// // Callback Hell
// getUser(1, function (err, user) {
//   if (err){
//     console.error(err);
//   } else {
//     console.log("Usuario:", user);
  
//     getPostsByUser(user.id, function (err, posts) {
//       if (err) return console.error(err);
//       console.log("Posts del usuario:", posts);
  
//       if (posts.length > 0) {
//         const firstPost = posts[0];
//         getCommentsByPost(firstPost.id, function (err, comments) {
//           if (err) return console.error(err);
//           console.log("Comentarios del primer post:", comments);
//         });
//       } else {
//         console.log("El usuario no tiene posts.");
//       }
//     });
//   }
// });


const myPromise = ()=>{
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      // resolve("la promesa se resuelve exitosamente");
      reject("la promesa fallo");
    }, 2000);
  })
}

myPromise()
  .then(response=>console.log(response))
  .catch(error=>console.log(error));