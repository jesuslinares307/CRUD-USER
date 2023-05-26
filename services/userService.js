const UserRepository = require('../repositories/UserRepository');

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(userData) {
    try {
      return await this.userRepository.createUser(userData);
    } catch (error) {
      throw new Error('Error al crear el usuario');
    }
  }

  async getUsers() {
    try {
      return await this.userRepository.getUsers();
    } catch (error) {
      throw new Error('Error al obtener los usuarios');
    }
  }

  async getUserById(id) {
    try {
      const user = await this.userRepository.getUserById(id);
      if (!user) {
        throw new Error('Usuario no encontrado');
      }
      return user;
    } catch (error) {
      throw new Error('Error al obtener el usuario');
    }
  }

  async updateUser(id, userData) {
    try {
      const user = await this.userRepository.getUserById(id);
      if (!user) {
        throw new Error('Usuario no encontrado');
      }
      return await this.userRepository.updateUser(user, userData);
    } catch (error) {
      throw new Error('Error al actualizar el usuario');
    }
  }

  async deleteUser(id) {
    try {
      const user = await this.userRepository.getUserById(id);
      if (!user) {
        throw new Error('Usuario no encontrado');
      }
      return await this.userRepository.deleteUser(user);
    } catch (error) {
      throw new Error('Error al eliminar el usuario');
    }
  }
}

module.exports = UserService;
