import axios from 'axios';

class AxiosApi
{
    constructor()
    {
        this.APIURI = 'https://api.themoviedb.org/3/movie';
        this.APIKEY = '64fc8874916ff3e593701b9da59b99ab';
    }

    /**
     *
     * @return promise
     */
    async getMoviesByCategory(category, page = 1)
    {
        const { data } = await axios.get(
            `${this.APIURI}/${category}?api_key=${this.APIKEY}&language=es-ES&page=${page}`,
        );

        return data;
    }

    /**
     *
     * @return promise
     */
    async getMovieById(id)
    {
        const { data } = await axios.get(
            `${this.APIURI}/${id}?api_key=${this.APIKEY}&language=es-ES`,
        );

        return data;
    }
}

export default new AxiosApi();
