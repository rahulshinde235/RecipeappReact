import { useEffect, useState } from "react";
import RecipeList from "../../components/RecipeList";
import { projectFirestore } from "../../firebase/config";
// styles
import "./Home.css";

export default function Home() {
  const [data, setdata] = useState(null);
  const [isPending, setisPending] = useState(false);
  const [error, seterror] = useState(false);
  useEffect(() => {
    setisPending(true);
    const unsub = projectFirestore.collection("recipes").onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          seterror("No recipes to load");
          setisPending(false);
          setdata(null);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setdata(results);
          setisPending(false);
        }
      },
      (err) => {
        seterror(err.message);
        setisPending(false);
      }
    );
    return () => {
      unsub();
    };
  }, []);
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
