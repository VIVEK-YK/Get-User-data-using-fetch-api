
window.onload = () =>{
    fetch('https://dummyjson.com/comments')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    console.log(data.comments.length);
    let length = data.comments.length; 
    let div = document.querySelector('.div');
    console.log(data.comments[0].user.username)
    for(let i = 0; i<length; i++){
        // console.log(data.comments[0]); 
        div.innerHTML += 
            `
            <div class = "content">
                <span>${data.comments[i].id}.</>
                <span class = "name">${data.comments[i].user.username}:- &nbsp;&nbsp;&nbsp;</span>
                <span id = 'comments'>${data.comments[i].body}</span>
            </div>
            <hr>`
        }
    // console.log(data.comments[0].body)
  })
  .catch((error) => {
    console.error('There has been a problem with your fetch operation:', error);
  });
    // let div = document.querySelector('.div');
    
}
