
import React from 'react';
import Link from 'next/link';
import './iconButton.css';

export default function IconButton({ href, iconSrc }: { href: string; iconSrc: string }) {
  return (
    <Link target='_blank' className='botaoIcon' href={href}>
        <img src={iconSrc} alt="Ícone" width={40} height={40} />
    </Link>
  );
}
