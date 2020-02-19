import { getRepository } from 'typeorm'
import Genre from '../entities/genre.model'

export default class GenreService {

    genreRepository() {
        return getRepository(Genre);
    }
    findAll() {
        return this.genreRepository().find();
    }
    findOne(id) {
        return this.genreRepository().findOne(id);
    }
    create(genreData) {
        return this.genreRepository().save(genreData);
    }
    update(id, genreData){
        return this.genreRepository().create(genreData);
    }
    delete(id) {
        return this.genreRepository().delete(id);
    }
}