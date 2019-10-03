import { viewsController } from './viewsController.js'

export const apiService = {

  async findUser(username) {
    const apiEndpoint = `https://api.github.com/users/${username}`
    try {    
      const response = await fetch(apiEndpoint)    
      const data = await response.json()        
      if (data.message === 'Not Found') {
        viewsController.notExist(data)          
      } else {
        viewsController.getInfoUser(data)    
        this.findRepos(username)
      }    
    } catch (error) {
      console.log(error);
    }
  },

  async findRepos(username) {
    
    const apiEndpoint = `https://api.github.com/users/${username}/repos`
    try {    
      const response = await fetch(apiEndpoint)    
      const data = await response.json()        
      viewsController.getUserRepos(data)    
    } catch (error) {
      console.log(error);
    }
  },

  async findRepoStars(username, repoName) {
    const apiEndpoint = `https://api.github.com/repos/${username}/${repoName}/stargazers`
    try {    
      const response = await fetch(apiEndpoint)    
      const data = await response.json()           
      return data;   
    } catch (error) {
      console.log(error);
    }
  },

  async findRepoBranches(username, repoName) {
    const apiEndpoint = `https://api.github.com/repos/${username}/${repoName}/branches`
    try {    
      const response = await fetch(apiEndpoint)    
      const data = await response.json()           
      return data;   
    } catch (error) {
      console.log(error);
    }
  }

}
