import { viewsController } from './viewsController.js'

export const apiService = {

  async findUser(username) {
    const apiEndpoint = `https://api.github.com/users/${username}`
    try {    
      const response = await fetch(apiEndpoint)    
      const data = await response.json()        
      if (data.message === 'Not Found') {
        return viewsController.notExist(data)
      } else {
        return viewsController.getInfoUser(data)    
      }    
    } catch (error) {
      console.log(error);
    }
  }

}
