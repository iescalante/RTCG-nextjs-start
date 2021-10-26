import Link from "next/link";

function News() {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs">
            NextJS Framework is a Great Framework!
          </Link>
        </li>
        <li>Another link</li>
      </ul>
    </>
  );
}

export default News;
