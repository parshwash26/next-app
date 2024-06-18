import { useEffect } from "react";
import { useRouter } from "next/router";
import { getDatabase } from "../utils/dbConnect";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = await getDatabase();
        console.log("MongoDB connected:", db.databaseName);
      } catch (error) {
        console.error("MongoDB connection error:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    router.push("/");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
