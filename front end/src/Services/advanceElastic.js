import axios from "axios";
import leftPad from "./LeftPad";

// {
//     "query": {"match": { "object" : q,}  },
//     "sort": [
//         {"_id": "asc" }
//     ]
// }

export const advanceUserSearch = async (fields, q) => {
  try {
    //   const response = axios.post(
    //     `http://localhost:9200/images/_doc/${queryV}`,
    //     {
    //         "query": {"match": {"object": "dental implant"} },
    //         "sort": [
    //             {"_id": "asc" }
    //         ]
    //     }
    //   );
    //   console.log(fieldname);
    //   var fn = "\""+fieldname+"\"";
    var response = await axios.post(
      "http://localhost:9200/images/_search",
      {
        query: {
          multi_match: {
            query: q,
            fields: fields,
          },
        },
      },
      { headers: { "Content-Type": "application/json" } }
    );
    //   if (fieldname=="_id") {
    //      response = await axios.post(
    //         'http://localhost:9200/images/_search',
    //         {
    //             "query": {"match": { "_id" : q} },
    //             "sort": [
    //                 {"_id": "asc" }
    //             ]
    //         },
    //         { headers: { 'Content-Type': 'application/json' } }
    //       )
    //   }
    if (response.data) {
      console.log(response.data.hits.total.value);
      const images = response.data.hits.hits.map((resItem) => {
        var imageName =
          resItem._source.patentID +
          "-D" +
          leftPad(resItem._source.figid, 5, "0");
        return { id: imageName, image: resItem._source };
      });
      console.log(images);
      return { data: images, total: response.data.hits.total.value };
    }
    return [];
  } catch (error) {
    return null;
  }
};
