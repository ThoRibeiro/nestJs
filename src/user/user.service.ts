import { Injectable } from '@nestjs/common';
import { User } from 'src/interfaces/user';


@Injectable()
export class UserService {
  private users: User[] = [];
  private currentId = 1;

  getAllUsers(): User[] {
    return this.users;
  }

  createUser(user: User): User {
    const newUser: User = { ...user, id: this.currentId++ };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id: number, updatedUser: User): User {
    const user = this.users.find(user => user.id === id);
    if (user) {
      Object.assign(user, updatedUser);
      return user;
    }
    return null;
  }

  deleteUser(id: number): boolean {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex > -1) {
      this.users.splice(userIndex, 1);
      return true;
    }
    return false;
  }

  getUserById(id: number): User {
    return this.users.find(user => user.id === id);
  }
}

