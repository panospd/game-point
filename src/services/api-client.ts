import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "dad5b56320be4ce1824afe527bf8211d"
    }
})