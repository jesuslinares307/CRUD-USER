const User = require('../models/User');

class UserRepository {
  async createUser(userData) {
    try {
      return await User.create(userData);
    } catch (error) {
      throw new Error('Error al crear el usuario');
    }
  }

  async getUsers() {
    try {
      return await User.findAll();
    } catch (error) {
      throw new Error('Error al obtener los usuarios');
    }
  }

  async getUserById(id) {
    try {
      return await User.findByPk(id);
    } catch (error) {
      throw new Error('Error al obtener el usuario');
    }
  }

  async updateUser(user, userData) {
    try {
      user.name = userData.name;
      user.email = userData.email;
      return await user.save();
    } catch (error) {
      throw new Error('Error al actualizar el usuario');
    }
  }

  async deleteUser(user) {
    try {
      await user.destroy();
      return { message: 'Usuario eliminado correctamente' };
    } catch (error) {
      throw new Error('Error al eliminar el usuario');
    }
  }
}

module.exports = UserRepository;
