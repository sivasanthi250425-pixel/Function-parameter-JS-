const welcomeEl=document.getElementById('welcome')
function greetUser(name){
    welcomeEl.textContent="Welcome back,"+name+"👋"
}
greetUser("siva")
function greetUser(greeting,name,emoji){
    
    welcomeEl.textContent=`Welcome ,${name},${greeting},${emoji}`
}
greetUser("Happy to see you back","siva","👋")