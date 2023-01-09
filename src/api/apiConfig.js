const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "6b55fa50ffc4079834ac05158726f282",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
