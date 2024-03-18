import Link from 'next/link';
import Image from 'next/image';
import localFont from 'next/font/local';

import { cn } from '@/lib/utils';

const headingFont = localFont({
  src: '../public/fonts/font.woff2'
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="items-center hidden transition hover:opacity-75 gap-x-2 md:flex">
        <Image src="/logo.svg" alt="Logo" height={30} width={30} />
        <p
          className={cn('pb-1 text-lg text-neutral-700', headingFont.className)}
        >
          Projectify
        </p>
      </div>
    </Link>
  );
};
