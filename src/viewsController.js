const resultsContainer = document.getElementById("resultsContainer")

export const viewsController = {

  notExist() {

    const h2 = document.createElement("h2")
    h2.setAttribute("class", "error")
    h2.innerHTML = "Does not exist"
    resultsContainer.appendChild(h2)

  },

  getInfoUser(user) {     
    
    console.log(user.name);
  
  }
}