import { Directus } from '@directus/sdk'

//General
const directusToken = process.env.DIRECTUS_API_TOKEN;
const directusUrl = process.env.DIRECTUS_URL;

//Vite
/**
 * const directusToken = import.meta.env.VITE_DIRECTUS_API_TOKEN;
 * const directusUrl = import.meta.env.VITE_DIRECTUS_URL;*/

if(!directusToken) {
    throw new Error('Please add a token');
}

if(!directusUrl) {
    throw new Error('Please add an url');
}

export const directus = new Directus(directusUrl, {
    auth: {
        staticToken: directusToken
    }
})

