
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import {getDatabase,get,ref} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCozgtBqe-15OX-PTj-1LabnATtu4d9OP4",
    authDomain: "blog-ba906.firebaseapp.com",
    projectId: "blog-ba906",
    storageBucket: "blog-ba906.appspot.com",
    messagingSenderId: "100435592523",
    appId: "1:100435592523:web:1a0f3b56e12a598f1854ce",
    measurementId: "G-RF9CSMSM67"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  const db=getDatabase(app);

  function getPostData(){
    const user_ref = ref(db,'post/');
    get(user_ref).then((snapshot)=>{
        const data=snapshot.val()
        let html = "";
        const table = document.querySelector('.main')
        for(const key in data){
            const{title,post_content}=data[key]
            console.log(post_content);

            html+=`
            <div class="post">
            <h2>${title}</h2>
            <p>
             ${post_content}
             </p>
             </div>
            `
        }
        table.innerHTML=html
    })
  }
  getPostData()