import axios from "axios";


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID gPDBNxDs96DwXmIiSGF_uL40JUG_LODrjzE0Xths9nU" 
    }
});