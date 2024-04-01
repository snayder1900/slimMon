import axios from "axios";
const BASE_URL = "http://localhost:3001/api/";
async function getDataModal(endpoint, datos) {
  try {
    const response = await axios.post(`${BASE_URL}${endpoint}`, datos);
    return response.data;
  } catch (error) {
    throw new Error(`error al enviar datos:${error.message}`);
  }
}

export { getDataModal };
