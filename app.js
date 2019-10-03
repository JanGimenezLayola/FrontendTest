import { apiService } from './src/apiService.js'

const search = document.getElementById("search")

search.addEventListener("submit", event => {
  event.preventDefault()
  const username = document.getElementById("usernameInput").value;
  apiService.findUser(username)
})
