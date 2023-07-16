import urlFor from '@/utils/urlFormater';
import Image from 'next/image';
import Link from 'next/link';
import Refractor from 'react-refractor';
import { ClipboardIcon } from '@heroicons/react/24/solid';
import { v4 as uuid } from 'uuid';

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
    myCodeField: ({ value }: any) => {
      const iconId = uuid();
      return (
        <div className="my-8 bg-gray-700 text-dark-textDescription px-4 py-3 ">
          <Refractor language="js" value={value.code} />
          <div className="flex justify-end">
            <ClipboardIcon
              id={`clipboard-icon-${iconId}`}
              className="w-6 h-6 cursor-pointer hover:text-gray-500 delay-75"
            />
          </div>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                document.getElementById('clipboard-icon-${iconId}').addEventListener('click', function() {
                  const textToCopy = ${JSON.stringify(value.code)};
                  const textarea = document.createElement('textarea');
                  textarea.value = textToCopy;
                  document.body.appendChild(textarea);
                  textarea.select();
                  document.execCommand('copy');
                  document.body.removeChild(textarea);
                });
              `,
            }}
          />
        </div>
      );
    },
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
