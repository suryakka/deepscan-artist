import { EntitySchema } from 'typeorm';
import Genre from '../../entities/genre.model';

const GenreSchema = new EntitySchema({
    name: 'Genre',
    target: Genre,
    tableName: 'genre',
    columns: {
        id: {
            type: "int",
            unique: true,
            generated: true,
            nullable: false,
            primary: true,
        },
        genre: {
            type: 'varchar',
            length: 100,
            nullable: false,
        },
        url: {
            type: 'varchar',
            length: 100,
            nullable: false,
        }
    },
    relations: {
        artist: {
            target: 'Artist',
            type: 'one-to-many',
            inverseSide: 'artist',
            joinColumn: true,
            cascade: true,
        },

    }
})

export default GenreSchema;