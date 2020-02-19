import { EntitySchema } from 'typeorm';
import Artist from '../../entities/artist.model';

const ArtistSchema = new EntitySchema({
    name: 'Artist',
    target: Artist,
    tableName: 'artist',
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
        },
        url: {
            type: 'varchar',
            length: 100,
            nullable: false,
        },
    },
    relations:{
        song:{
            target:'Song',
            type:'one-to-many',
            inverseSide:'song',
            joinColumn:true,
            cascade:true,
        },
        genre:{
            target:'Genre',
            type:'many-to-one',
            joinColumn:true,
        }
    }
})

export default ArtistSchema;