import User from '../entities/User';

class UserService {


    getUsers(users) {
       
           return users.map(user => new User(user.picture, user.name, user.email, user.dob));
    }
}

export const userService = new UserService();