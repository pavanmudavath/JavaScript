
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAuth ,signInWithEmailAndPassword,onAuthStateChanged,signOut} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
  import {getDatabase,set,ref,get} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

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

  const auth=getAuth(app);
  const db=getDatabase(app);

  const my_blog = document.querySelector('.my_blog')
  const login_page = document.querySelector('.login')

  onAuthStateChanged(auth,(user)=>{
    if(user){
        my_blog.classList.add('show')
        login_page.classList.add('hide')
    }
    else{
        my_blog.classList.remove('show')
        login_page.classList.remove('hide') 
    }
  })

  function SignInUser(){
    
    const email  = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signInWithEmailAndPassword(auth,email,password).then((userCredinals)=>{
        console.log(userCredinals.user.uid);
    });

  }
  const Sign_btn = document.querySelector('#sign-in')
  Sign_btn.addEventListener('click',SignInUser);


  //Singout
  const sign_out_btn= document.querySelector('#logout');
  sign_out_btn.addEventListener('click',()=>{
    signOut(auth).then(()=>{

    }).catch((error)=>{
        console.log("error"+error);
    })
  })


  //Blog section Here
const notify = document.querySelector('.notifiy');
  const add_post_Btn = document.querySelector('#post_btn')

  function Add_Post(){
    const title = document.querySelector('#title').value;
    const post_content=document.querySelector('#post_content').value;
    const id=Math.floor(Math.random()*100);

    set(ref(db,'post/'+id),{
        title:title,
        post_content:post_content
    })
    notify.innerHTML="data Added"
    document.querySelector("#title").value="";
    document.querySelector("#post_content").value="";
  }

  add_post_Btn.addEventListener('click',Add_Post);


//Get Data from  firebase DB
 function GetPostData(){
    const user_ref = ref(db,'post/')
    get(user_ref).then((snapshot)=>{
        const data=snapshot.val()
          
        let html="";
        const table = document.querySelector('table')
        for(const key in data){
            const {title,post_content}=data[key]

            html+=`
            <tr>
                <td><span class="postNumber"></span></td>
                <td>${title}</td>
                <td><button class="delete" onclick="delete_data(${key})">Delete</button> </td>
                <td><button class="update" onclick="update_data(${key})">Update</button> </td>
            </tr>
            `

        }
        table.innerHTML=html

    })
 }
 GetPostData();