import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

function Collection({ results }) {
  const BASE_URL = "https://image.tmdb.org/t/p/w500";
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center ">
      {results.map((result) => {
        <Thumbnail key={result.id} result={result} />;
        <div>I love you </div>;
      })}
    </FlipMove>
  );
}

export default Collection;
