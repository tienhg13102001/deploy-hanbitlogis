import axios from "axios";

const baseURL = "https://cdn.contentful.com";

class NoticeService {
  getNotices = async (config) => {
    const res = await axios.get(
      `${baseURL}/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/environments/${process.env.REACT_APP_CONTENTFUL_ENVIRONMENT_ID}/entries`,
      {
        params: {
          access_token: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
          content_type: process.env.REACT_APP_CONTENTFUL_CONTENT_TYPE,
          select: "fields,sys.id",
        },
      }
    );
    return res;
  };

  getNotices2 = async (config) => {
    const res = await axios.get(
      `${baseURL}/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/environments/${process.env.REACT_APP_CONTENTFUL_ENVIRONMENT_ID}/entries`,
      {
        params: {
          access_token: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
          content_type: process.env.REACT_APP_CONTENTFUL_CONTENT_TYPE_2,
          select: "fields,sys.id",
        },
      }
    );
    return res;
  };
}
export default new NoticeService();
