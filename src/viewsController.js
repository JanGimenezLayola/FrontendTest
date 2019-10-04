import { apiService } from './apiService.js'

const resultsContainer = document.getElementById("resultsContainer")
const resultsInfo = document.createElement("div")

export const viewsController = {

  notExist() {

    this.removeAll()

    const h2 = document.createElement("h2")
    h2.setAttribute("class", "error")
    h2.innerHTML = "Does not exist"

    resultsInfo.appendChild(h2)
    resultsContainer.appendChild(resultsInfo)

  },

  getInfoUser(user) {  

    this.removeAll()


    const imgContainer = document.createElement("div")
    const img = document.createElement("img")

    const infoContainer = document.createElement("div")
    const username = document.createElement("p")
    const name = document.createElement("h2")
    const bio = document.createElement("p")


    resultsInfo.setAttribute("class", "results-container")

    imgContainer.setAttribute("class", "img-container")
    img.setAttribute("class", "profile-img")

    infoContainer.setAttribute("class", "info-container")
    username.setAttribute("class", "username")
    name.setAttribute("class", "name")
    bio.setAttribute("class", "bio")
  

    img.src = user.avatar_url
    imgContainer.appendChild(img)
    resultsInfo.appendChild(imgContainer)

    username.innerHTML = `@${user.login}`
    infoContainer.appendChild(username)
  
    name.innerHTML = user.name
    infoContainer.appendChild(name)
  
    bio.innerHTML = user.bio
    infoContainer.appendChild(bio)

    resultsInfo.appendChild(infoContainer)
    resultsContainer.appendChild(resultsInfo)    
  },

  getUserRepos(data) {

    
    const cardContainer = document.createElement("section")
    cardContainer.setAttribute("class", "repos-container")
    
    const title = document.createElement("h3")
    title.setAttribute("class", "repo-container-title")
    title.innerHTML = "Repositories"
    cardContainer.appendChild(title)
        
    data.forEach(async (repo) => {      
            
      const repoCard = document.createElement("article")
      const repoDiv = document.createElement("div")
      repoCard.setAttribute("class", "repo-card")

      const name = document.createElement("p")
      const stars = document.createElement("p")
      const forks = document.createElement("p")
      

      name.innerHTML = repo.name
      repoCard.appendChild(name)

      stars.innerHTML = repo.stargazers_count
      repoDiv.appendChild(stars)      

      forks.innerHTML = repo.forks_count
      repoDiv.appendChild(forks)
      
      repoCard.appendChild(repoDiv)
      cardContainer.appendChild(repoCard)  
      resultsContainer.appendChild(cardContainer)  
    })


  },

  removeAll() {

    const resultsInfo = document.querySelector(".results-container")

    if (resultsInfo) {
        while (resultsInfo.firstChild) {
            resultsInfo.firstChild.remove()
        }
        resultsContainer.removeChild(resultsInfo) 
    }

    const resultsReps = document.querySelector(".repos-container")

    if (resultsReps) {
        while (resultsReps.firstChild) {
            resultsReps.firstChild.remove()
        }
        resultsContainer.removeChild(resultsReps) 
    }
},
}