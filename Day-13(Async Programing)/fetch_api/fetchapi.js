async function getData(){
    let response= await fetch (`https://jsonplaceholder.typicode.com/todos/7`);
    let data=await response.json();
    console.log(data);
    
}
getData();