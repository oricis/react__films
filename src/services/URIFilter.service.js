class URIFilter {

    clean(URI, arrStrsNotAllowed)
    {

        for (let index = 0; index < arrStrsNotAllowed.length; index++) {
            if (URI.includes(arrStrsNotAllowed[index])) {
                return '';
            }
        }

        return URI;
    }
}

export default new URIFilter();
