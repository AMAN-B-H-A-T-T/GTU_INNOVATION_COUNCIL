import Image from "next/image"
function QuoteCard({content,author,designation,hidden}) {
  return (
    <figure className={`px-5 fade-in-out quote-card text-center ${hidden && 'hidden'}`}>
    <svg
      className="w-10 h-10 mx-auto mb-3 text-black"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 18 14"
    >
      <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
    </svg>
    <blockquote>
      <p className="sm:text-[1rem] xss:text-lg xs:text-lg md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl text-gray-900 min-h-20">
       {content && content} 
      </p>
    </blockquote>
    <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">      
      <div className="flex text-xs xss:text-[1rem] xs:text-xs sm:text-xl lg:text-xl items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
        <cite className="pe-3 font-bold text-gray-900">
        {author && author}
        </cite>
        <cite className="ps-3 text-gray-900 font-medium dark:text-gray-900">
          {designation && designation}
        </cite>
      </div>
    </figcaption>
  </figure>
  )
}

export default QuoteCard