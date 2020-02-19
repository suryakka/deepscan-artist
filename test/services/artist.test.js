import ArtistService from "../../src/services/artist.service";
import init from "../../src/api";

let server;
const artistService = new ArtistService();

const Freddie = {
    id: 1,
    name: " Freddie Mercury",
    url: "https://www.udiscovermusic.com/wp-content/uploads/2019/11/Freddie-Mercury-FreddieMeter-photo-1000-CR"
}
const Elvis = {
    id: 2,
    name: "Elvis Presley",
    url: "https://filmjournal.net/wp-content/uploads/2019/11/Elvis-Presley-195668767.jpg"
}
describe('artist service', () => {

    beforeEach(async () => {
        server = await init();
        await artistService.artistRepository().clear();

    })

    it('create method should return artist', async () => {
        const saveArtist = await artistService.create(Freddie);
        const findArtist = await artistService.findOne(Freddie.id);
        expect(findArtist).toMatchObject(saveArtist)
    })

    afterEach(async () => {
        if (server) {
            server.close();
        }
    })


})
describe('Find All ', () => {

    beforeEach(async () => {
        await artistService.artistRepository().clear();
    })
    it('should return size of artist list', async () => {
        await artistService.create(Elvis);
        const currentArtistList = await artistService.findAll();
        expect(currentArtistList.length).toBe(1);
    })
    afterEach(async () => {
        if (server) {
            server.close();
        }
    })

})
describe('Delete Artist ', () => {

    beforeEach(async () => {
        await artistService.artistRepository().clear();
    })
    it('should return size of artist list after deleted 1 ', async () => {
        await artistService.create(Elvis);
        await artistService.create(Freddie);
        await artistService.delete(Elvis.id);
        const currentArtistList = await artistService.findAll();
        expect(currentArtistList.length).toBe(1);
    })
    afterEach(async () => {
        if (server) {
            server.close();
        }
    })

})