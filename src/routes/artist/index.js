import ArtistService from "../../services/artist.service";

const artistService = new ArtistService();
const artistRoute = [{
    method: 'GET',
    path: '/artist',
    handler: async (request, h) => {
        const data = await artistService.findAll();
        console.log('get masuk artist');
        return h.response({
            statusCode: 200,
            data
        }).code(200);
    }
}, {
    method: 'GET',
    path: '/artist/{id}',
    handler: async (request, h) => {
        const { id } = request.params;
        const data = await artistService.findOne({ id });

        console.log(data);
        return h.response({
            statusCode: 200,
            data
        }).code(200);
    }
},
]
export default artistRoute;