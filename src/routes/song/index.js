import SongService from "../../services/song.service";
import Boom from '@hapi/boom';
import Joi from '@hapi/joi'
import { join } from "path";

const songService = new SongService();

const songRoute = [{
    method: 'GET',
    path: '/song',
    handler: async (request, h) => {
        const data = await songService.findAll();
        console.log(data);
        return h.response({
            statusCode: 200,
            data
        }).code(200);
    }
}, {
    method: 'GET',
    path: '/song/{id}',
    handler: async (request, h) => {
        const { id } = request.params;
        const data = await songService.findOne({ id });

        console.log(data);
        return h.response({
            statusCode: 200,
            data
        }).code(200);

    }
},
{
    method: 'POST',
    path: '/song',
    config: {
        handler: async (request, h) => {

            const data = await songService.create(request.payload);
            const dataCreated = await songService.findOne(request.payload.id);
            return h.response({
                statusCode: 201,
                dataCreated
            }).code(201);
        },
        validate: {
            payload: {
                name: Joi.string().max(100).required(),
                artist: {
                    id: Joi.number().required()
                }
            }
        }
    }
},
{
    method: 'PUT',
    path: '/song',
    config: {
        handler: async (request, h) => {
            const id = request.payload.id;
            const data = await songService.update(id, request.payload);

            console.log(data);

            const dataUpdated = await songService.findOne(request.payload.id);
            return h.response({
                statusCode: 20,
                dataUpdated
            }).code(202);

        },
        validate: {
            payload: {
                id: Joi.number().required(),
                name: Joi.string().max(100).required(),
                artist: {
                    id: Joi.number().required()
                }
            }
        }
    }
},
{
    method: 'PUT',
    path: '/song/{id}',
    config: {
        handler: async (request, h) => {
            const id = request.params;
            const data = await songService.update(id, request.payload);

            console.log(data);

            const dataUpdated = await songService.findOne(request.payload.id);
            return h.response({
                statusCode: 20,
                dataUpdated
            }).code(202);

        },
        validate: {
            payload: {
                name: Joi.string().max(100).required(),
                artist: {
                    id: Joi.number().required()
                }
            }
        }
    }
},
{
    method: 'DELETE',
    path: '/song/{id}',
    handler: async (request, h) => {
        const { id } = request.params;
        const data = await songService.findOne({ id });

        if (!data) {
            throw Boom.notFound('Song Not Found.');
        } else {
            await songService.delete(id);
            return h.response().code(204);
        }
    }
},

]
export default songRoute;