import axios from "axios";

const getAll = async (url) => {
    const config = {
      method: "GET",
      url:`${url}?state=all`,
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    };
    let res = await Axios(config)
    let {data} = res;
    let P = Promise.all(data)
  };

export default getAll;
// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });