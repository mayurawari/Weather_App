import React from 'react'

export const api = async(city) => {
      try {
        const res=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4cf3bacbbc96663b0be8529f51b31905`)
        console.log(res.data);
        return res.data
      } catch (error) {
        console.log(error);
        throw new error;
      }

}

 