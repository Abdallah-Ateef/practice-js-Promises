function getallusers(){
    return new Promise((resolve,reject)=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resolve=>{
        if(resolve.ok){
            return resolve.json();
        }else{alert(Error('error in users request'))}
    })
    .then(Response=>{
        let users=Response;
        document.querySelector('.users').innerHTML='';
        users.forEach(ele => {
           document.querySelector('.users').innerHTML+=`
            <div class="user" onclick='getuserId(${ele.id},this)'>
                <h3>${ele.name}</h3>
                <p>${ele.email}</p>
            </div>
           `
        });
        resolve()
    })
})
}

getallusers()
.then(()=>{getallposts(1);})
;



function getallposts(userId){
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(resolve=>{
        if(resolve.ok){
            return resolve.json();
        }
    })
    .then(response=>{
        let allposts=response;
        document.querySelector('.posts').innerHTML='';
        allposts.forEach(ele=>{
            document.querySelector('.posts').innerHTML+=`
             <div class="post">
                <h3>${ele.title}</h3>
                <hr>
                <p>${ele.body}</p>
            </div> 
            
            `
                
            
        })
    })
}





function getuserId(id,ele){
    getallposts(id);
   let allselect=document.getElementsByClassName('selected');
   for(let ele1 of allselect){
    ele1.classList.remove("selected")
    console.log(ele);
   }
   ele.classList.add('selected');
}