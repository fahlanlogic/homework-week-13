import { Link } from "react-router-dom";

export default function Books({ id, title, author, image, publisher, year }) {
  return (
    <Link
      to={`/books/${id}`}
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={`http://localhost:8000/${image}`}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title} ({year})
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {author}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <span>Publisher: </span>
          {publisher}
        </p>
      </div>
    </Link>
  );

  {
    /* <Card key={id} my={4} p={4} cursor='pointer'>
      <VStack>
        <Heading size={"md"}>
          {title} ({year})
        </Heading>
        <Text>{author}</Text>
        <Image w={24} h={24} src={`http://localhost:8000/${image}`} />
        <Text>
          <span>Publisher: </span>
          {publisher}
        </Text>
      </VStack>
    </Card> */
  }
}
