import axios from 'axios';

const getCities = async(req:string | undefined) => {
  const url = `https://villes-de-france-backend.herokuapp.com/cities?search=${req}`;
  let result;
  try {
    await axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        result = response.data;
        return response.data
       
      });
  } catch (error:any) {
      console.log(error);
      return error;
  }
  return result;
}

export default getCities;