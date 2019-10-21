import axios from 'axios';

class AxiosApi
{
    constructor() {
        this.APIURI = 'https://api.themoviedb.org/3/movie';
        this.APIKEY = '64fc8874916ff3e593701b9da59b99ab';
        this.callsDone = 0;
    }

    async getMoviesByCategory(category, page = 1) {
        this.callsDone++;

        const { data } = await axios.get(
            `${this.APIURI}/${category}?api_key=${this.APIKEY}&language=es-ES&page=${page}`,
        );
        return data;
    }

    async getMovieById(id) {
        const { data } = await axios.get(
            `${this.APIURI}/${id}?api_key=${this.APIKEY}&language=es-ES`,
        );
        return data;
    }

    howManyCalls() {
        return this.callsDone;
    }
}

export default new AxiosApi();
