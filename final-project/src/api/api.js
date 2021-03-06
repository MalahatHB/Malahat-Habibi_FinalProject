import axios from "../utils/axios";

function api() {
  return {
    fetchMovieList: () => {
      const url = `/movie`;
      return axios.get(url, {});
    },

    fetchFilteredMovieList: (filter) => {
      const url = `/movie`;
      return axios.get(url, {
        params: {
          filter
        }
      });
    },

    fetchMovie: (id) => {
      const url = `/movie`;
      return axios.get(url, {
        params: {
          id
        }
      });
    },

    addMovie: (name, image, year, description) => {
      const url = `/movie`;
      const params = JSON.stringify({
        name: name,
        image: image,
        year: year,
        description: description
      });
      return axios.post(url, params);
    },

    // It Does not work, parameters didn't send
    editMovie: (id, name, image, year, description) => {
      const url = `/movie`;
      const params = {
        id: id,
        name: name,
        image: image,
        year: year,
        description: description
      };
      return axios.put(url, {
        params: params
      });
    },

    deleteMovie: (id) => {
      const url = `/movie`;
      return axios.delete(url, {
        params: {
          id
        }
      });
    }, 
  };
}

export default api();