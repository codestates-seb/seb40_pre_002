import axios from 'axios';

export const detailAPIs = {
  getDetail: async (id: string | undefined) => {
    const response = await axios.get(
      'https://run.mocky.io/v3/65c3ea76-4234-4444-a18a-4d5a83138472'
    );
    return response;
  },
};
