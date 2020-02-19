import { EntitySchema } from 'typeorm';
import Song from '../../entities/song.model';

const SongSchema = new EntitySchema({
    name: 'Song',
    target: Song,
    tableName: 'song',
    columns: {
        id: {
            type: "int",
            unique: true,
            generated: true,
            nullable: false,
            primary: true,
        },
        name: {
            type: 'varchar',
            length: 100,
            nullable: false,
        }
    },
    relations:{
        artist:{
            target:'Artist',
            type:'many-to-one',
            joinColumn:true,
        }
    }
})

export default SongSchema;