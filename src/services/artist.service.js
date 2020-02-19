import { getRepository } from 'typeorm'
import Artist from '../entities/artist.model'

export default class ArtistService {

    artistRepository() {
        return getRepository(Artist);
    }
    findAll() {
        return this.artistRepository().find({ relations: ['genre'] });
    }
    findOne(id) {
        return this.artistRepository().findOne(id);
    }
    create(artistData) {
        return this.artistRepository().save(artistData);
    }
    update(id, artistData){
        return this.artistRepository().create(artistData);
    }
    delete(id) {
        return this.artistRepository().delete(id);
    }
}