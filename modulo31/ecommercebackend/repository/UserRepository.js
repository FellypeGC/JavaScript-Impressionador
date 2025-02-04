import BaseRepository from "./BaseRepository.js";

class UserRepository extends BaseRepository {
  async getAll() {
    try {
      const results = await super.getAll(
        'users', ['id', 'name', 'surname', 'email']
      );
      return results;
    } catch (error) {
      throw error;
    }
  }

  async getByID(id) {
    try {
      const results = await super.getByID(
        'users', ['id', 'name', 'surname', 'email'], id
      );
      return results;
    } catch (error) {
      throw error;
    }
  }

  async insertOne(valuesArray) {
    try {
      await super.insertOne(
        'users', ['name', 'surname', 'email'], valuesArray
      );
    } catch (error) {
      throw error;
    }
  }
}

export default UserRepository;