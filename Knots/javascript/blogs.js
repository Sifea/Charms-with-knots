//DARKMODE

let darkmode = localStorage.getItem('dark')
const theme = document.getElementById('theme')

const enableDarkmode = () =>{
  document.body.classList.add('dark')
  localStorage.setItem('dark', 'active')
}

const disableDarkmode = () =>{
  document.body.classList.remove('dark')
  localStorage.setItem('dark', 'null')
}

if(darkmode === "active") enableDarkmode()

theme.addEventListener("click", () =>{
  darkmode = localStorage.getItem('dark')
  darkmode !=="active" ? enableDarkmode() : disableDarkmode()
})

//DARKMODE