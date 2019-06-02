import axios from "axios";

const SERVICE_URL = "https://api.ipgeolocation.io/ipgeo";
const SERVICE_KEY = "PUT_YOUR_API_KEY_RIGHT_THERE";

const getUserLocation = async () => {
  const url = `${SERVICE_URL}?apiKey=${SERVICE_KEY}`;
  try {
    const response = await axios.get(url);
    return {
      id: response.data.geoname_id,
      city: response.data.city,
      country: response.data.country_code2
    };
  } catch (error) {
    console.error(error);
  }
};

export default getUserLocation;
