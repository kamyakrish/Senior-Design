import axios from "axios";

export default axios.create({
  baseURL: 'https://express-auv3rzs3sa-uw.a.run.app',
  headers: {
    "Content-type": "application/json",
    'Access-Control-Allow-Origin': '*'
  }
});
