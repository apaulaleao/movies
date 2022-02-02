
const apiConfig = {
    baseURL:'https://api.themoviedb.org/3',
    apiKey: ' 54ffed57deb5a7a8688be4de3007e578',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,

};

export default apiConfig;