import { getRepository } from 'typeorm'
import Song from '../entities/song.model'
import Boom from '@hapi/boom'

export default class SongService {

    songRepository() {
        return getRepository(Song);
    }
    findAll() {
        return this.songRepository().find({ relations: ['artist'] });
    }
    async findOne(id) {
        const data = await this.songRepository().findOne(id, { relations: ['artist'] });
        if (!data) {
            throw Boom.notFound('Song Not Found');
        } else {
            return data;
        }
    }
    create(songData) {
        return this.songRepository().save(songData, { relations: ['artist'] });
    }
    async update(id, songData) {
        await this.findOne(id);
        return this.songRepository().save(songData, { relations: ['artist'] });
    }
    async updateWithParam(id, songData) {
        await this.findOne(id);
        return this.songRepository().save(songData, { relations: ['artist'] });
    }
    delete(id) {
        return this.songRepository().delete(id);
    }
}