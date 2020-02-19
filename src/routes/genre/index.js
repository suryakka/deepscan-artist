import GenreService from "../../services/genre.service";

const genreService = new GenreService();
const genreRoute = [{
    method: 'GET',
    path:'/genre',
    handler: async (request, h )=>{
        console.log('get masuk genre');
        const data = await genreService.findAll();
        return h.response({
            statusCode: 200,
            data
        }).code(200);
    }
}]
export default genreRoute;