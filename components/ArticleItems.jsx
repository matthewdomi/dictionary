import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from './button';

export default function ArticleItems({ book }) {
  return (
    <div className="bg-slate-200 rounded-3xl">
      <Link href={`/books/${book.slug}`}>
        <a>
          <Image
            src={book.image}
            alt={book.name}
            className="rounded-t-3xl md: shadow "
            width={500}
            height={400}
          />
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/books/${book.slug}`}>
          <a>
            <h2 className="text-lg">{book.name}</h2>
          </a>
        </Link>
        <p className="mb-2">{book.description}</p>
        <p>${book.numReviews}</p>
        <Button>Add to Favorite</Button>
      </div>
    </div>
  );
}
