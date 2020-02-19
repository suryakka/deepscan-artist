import request from 'supertest';
import init from '../../src/api';
import ArtistService from '../../src/services/artist.service';

let app;
const artistService = new ArtistService();


const artist = [
    {
        id: 1,
        name: " Freddie Mercury",
        url: "https://www.udiscovermusic.com/wp-content/uploads/2019/11/Freddie-Mercury-FreddieMeter-photo-1000-CR"
    },
    {
        id: 2,
        name: "Elvis Presley",
        url: "https://filmjournal.net/wp-content/uploads/2019/11/Elvis-Presley-195668767.jpg"
    }
]


describe('artist findAll', () => {

    beforeEach(async () => {
        app = await init();
        await artistService.artistRepository().clear();
    });



    it('GET/ endpoint find all', async () => {
        const res = await request(app)
            .get('/artist')


        artist.forEach(async (e) => {
            await artistService.create(e);
        })

        const findAll = await artistService.findAll();


        expect(res.statusCode).toBe(200);
    })

    afterEach(async () => {
        if (app) {
            app.close();
        }
    })


})

const payload = {
    name: " Freddie Mercury",
    url: "https://www.udiscovermusic.com/wp-content/uploads/2019/11/Freddie-Mercury-FreddieMeter-photo-1000-CR",
}

describe('findById', () => {

    beforeEach(async () => {
        await artistService.artistRepository().clear();
    });

    it('GET/{id} endpoint find by id', async () => {

        const Freddie = await artistService.create(payload);

        const res = await request(app)
            .get(`/artist/${payload.id}`)

        const actual = await artistService.findOne(payload.id);
        expect(res.statusCode).toBe(200);
    })

    afterEach(async () => {
        if (app) {
            app.close();
        }
    })


})
