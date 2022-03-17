import { useQuery } from "react-query";
import axios from "axios";

export const useTestTornadoWarnings = () =>
  useQuery("jsonPlaceholder", async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    return data.features;
  });
