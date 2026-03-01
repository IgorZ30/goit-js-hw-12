import axios from "axios";
export async function getImagesByQuery(query, page) {
    const key = "54828579-b719dea7318382c6ddac3285f"
    try {
       const response = await axios.get("https://pixabay.com/api/", {
           params: {
           per_page:15,
           page: page,
            key: key,
            q: query,
            image_type: "photo",
            orientation: "horizontal",
           safesearch: true
        }
       })
        return response.data
    }
    catch(error) {
        return []
   }
}