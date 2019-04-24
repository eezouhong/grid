import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com/',
    headers:{
        Authorization:'Client-ID 204fa5f482f45ac1eb912337fb9ee7a2a257f0f787dc3a9cdd53f7a63d65f8af'
    }
});