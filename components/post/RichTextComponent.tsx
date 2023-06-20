import urlFor from '@/utils/urlFormater';
import Image from 'next/image';
import Link from 'next/link';

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="relative w-full h-96 m-10 mx-auto">
        <Image
          className="object-contain"
          src={urlFor(value).url()}
          alt="Blog Post Image"
          fill
        />
      </div>
    ),
  },
  lists: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 list-disc space-y-5">{children} </ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal">{children} </ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl py-10 font-bold">{children} </h1>
    ),
    h2: ({ children }: any) => (
      <h1 className="text-4xl py-10 font-bold">{children} </h1>
    ),
    h3: ({ children }: any) => (
      <h1 className="text-3xl py-10 font-bold">{children} </h1>
    ),
    h4: ({ children }: any) => (
      <h1 className="text-2xl py-10 font-bold">{children} </h1>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className=" border-l-dark-smallHeader border-l-4 pl-5 py-5 my-5">
        {children}{' '}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/')
        ? 'noreferrer nopener'
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className=" text-dark-smallHeader hover:text-dark-cardBorder"
        >
          {children}
        </Link>
      );
    },
  },
};

// import urlFor from '@/utils/urlFormater';
// import Image from 'next/image';
// import Link from 'next/link';

// export const RichTextComponents = {
//   //   types: {
//   //     image: ({ node }: any) => (
//   //       <div className="relative w-full h-96 m-10 mx-auto">
//   //         <Image
//   //           className="object-contain"
//   //           src={urlFor(node).url()}
//   //           alt="Blog Post Image"
//   //           fill
//   //         />
//   //       </div>
//   //     ),
//   //   },
//   types: {
//     image: ({ node }: any) => {
//       if (!node || !node.asset || !node.asset._ref) {
//         return null;
//       }

//       const imageUrl = urlFor(node.asset._ref).url();

//       if (!imageUrl) {
//         return null;
//       }

//       return (
//         <div className="relative w-full h-96 m-10 mx-auto">
//           <Image
//             className="object-contain"
//             src={imageUrl}
//             alt="Blog Post Image"
//             fill
//           />
//         </div>
//       );
//     },
//   },
//   lists: {
//     bullet: ({ children }: any) => (
//       <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
//     ),
//     number: ({ children }: any) => (
//       <ol className="mt-lg list-decimal">{children}</ol>
//     ),
//   },
//   block: {
//     h1: ({ children }: any) => (
//       <h1 className="text-5xl py-10 font-bold">{children}</h1>
//     ),
//     h2: ({ children }: any) => (
//       <h2 className="text-4xl py-10 font-bold">{children}</h2>
//     ),
//     h3: ({ children }: any) => (
//       <h3 className="text-3xl py-10 font-bold">{children}</h3>
//     ),
//     h4: ({ children }: any) => (
//       <h4 className="text-lg py-10 font-bold">{children}</h4>
//     ),
//     blockquote: ({ children }: any) => (
//       <blockquote className="border-l-dark-smallHeader border-l-4 pl-5 py-5 my-5">
//         {children}
//       </blockquote>
//     ),
//   },
//   marks: {
//     link: ({ children, mark }: any) => {
//       const rel = !mark.href.startsWith('/')
//         ? 'noreferrer noopener'
//         : undefined;

//       return (
//         <Link
//           href={mark.href}
//           rel={rel}
//           className="underline decoration-dark-smallHeader hover:decoration-dark-cardBorder"
//         >
//           {children}
//         </Link>
//       );
//     },
//   },
// };
