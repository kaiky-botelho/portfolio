// components/LinkButton.tsx
import React from 'react';
import Link from 'next/link';

export default function IconButton({ href, iconSrc }: { href: string; iconSrc: string }) {
  return (
    <Link href={href}>
        <img src={iconSrc} alt="Ícone" width={40} height={40} />
    </Link>
  );
}
