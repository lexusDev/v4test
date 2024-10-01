import axios from "axios";

const downloadCSV = async (url: string) => {
    const response = await axios.get(url, { responseType: 'stream' });
    return response.data;
};

export { downloadCSV };