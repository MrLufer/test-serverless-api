import { handlerPath } from '@libs/handler-resolver';

export const getPeople = {
    handler: `${handlerPath(__dirname)}/handler.getPeople`,
    events: [
        {
            http: {
                method: 'get',
                path: 'people/{number}',
            },
        },
    ],
};



export const postFavorite = {
    handler: `${handlerPath(__dirname)}/handler.createFavorite`,
    events: [
        {
            http: {
                method: 'post',
                path: 'favorite',
            },
        },
    ],
};


export const getFavorites = {
    handler: `${handlerPath(__dirname)}/handler.getFavorites`,
    events: [
        {
            http: {
                method: 'get',
                path: 'favorite',
            },
        },
    ],
};