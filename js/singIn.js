const elUserName = document.querySelector('#userName')
const elUserPassword = document.querySelector('#userPassword')
const elForm = document.querySelector('#signinForm')
const elErorTExt = document.querySelector('.eror')

// token ; eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2UyNjFlODkzMzk3NjBhMTU1ZWE5MTEiLCJpYXQiOjE2NzU3ODI5MjEsImV4cCI6MTY3NjA0MjEyMX0.3MlSglGBPNmkx76ooWAZYAYlVyioPQhCE4RnUCkh0mE
 // token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRveGlydXNtb25vdkBnbWFpbC5jb20iLCJ1c2VySWQiOiI2M2U0OTQyYjE4YWRmOTE5N2RhYjFjMzIiLCJpYXQiOjE2NzU5MjQ1MjMsImV4cCI6MTY3NjE4MzcyM30.mH4fucfxJH1xWsDZWSjdnv9tsuQ_nsjd2vIca0PuULk
elForm.addEventListener('submit' , (e)=>{
  e.preventDefault()
  console.log(elUserName.value , elUserPassword.value);

    const data = { 
      username: elUserName.value ,
      password: elUserPassword.value
    };
        fetch('https://todo-for-n92.cyclic.app/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
          
        })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          console.log( data.token);
          if (data.token) {
            localStorage.setItem('token', JSON.stringify(data.token))
          }
          if (localStorage.getItem('token')) {
            window.location.replace('../index.html')
          }

        })
        .catch ((error)=> {
           console.error('Error:', error);
           elErorTExt.textContent = 'UserName or password invalit!'
        })
   
})

