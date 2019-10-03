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
    console.log('repossss');
    
    const apiEndpoint = `https://api.github.com/users/${username}/repos`
    try {    
      const response = await fetch(apiEndpoint)    
      const data = await response.json()        
      viewsController.getUserRepos(data)    
    } catch (error) {
      console.log(error);
    }
  }

}
