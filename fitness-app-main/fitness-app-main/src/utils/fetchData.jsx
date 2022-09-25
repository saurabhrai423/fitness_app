export const exerciseOptions = {
  method: 'GET',
  // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': '8c3bc80409mshe7a39e7b293573cp147fd3jsndb125d9c863e',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
export const YoutubeOptions = {
  method: 'GET',
  // url: 'https://youtube-search-and-download.p.rapidapi.com/video/related',
  headers: {
    'X-RapidAPI-Key': '8c3bc80409mshe7a39e7b293573cp147fd3jsndb125d9c863e',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const FetchData = async(url, option) => {
    const response = await fetch(url, option)
    const data = response.json();
    return data;
}









// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });