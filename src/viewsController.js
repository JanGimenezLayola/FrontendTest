const resultsContainer = document.getElementById("resultsContainer")

export const viewsController = {

  notExist() {

    const h2 = document.createElement("h2")
    h2.setAttribute("class", "error")
    h2.innerHTML = "Does not exist"
    resultsContainer.appendChild(h2)

  },

  getInfoUser(user) {  

    const resultsInfo = document.createElement("div")
    const infoContainer = document.createElement("div")
    const username = document.createElement("p")
    const name = document.createElement("h2")
    const bio = document.createElement("p")
    
    resultsInfo.setAttribute("class", "results-container")
    infoContainer.setAttribute("class", "info-container")
    username.setAttribute("class", "username")
    name.setAttribute("class", "name")
    bio.setAttribute("class", "bio")

    username.innerHTML = `@${user.login}`
    infoContainer.appendChild(username)

    name.innerHTML = user.name
    infoContainer.appendChild(name)
  
    bio.innerHTML = user.bio
    infoContainer.appendChild(bio)

    resultsInfo.appendChild(infoContainer)
    resultsContainer.appendChild(resultsInfo)   
  }
}