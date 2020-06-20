import React from 'react';
import Link from 'next/link';

export default function Index() {
    return (
        <div>
            <h1>Hola Next.js</h1>
            <ul></ul>
            <ul>
                <li>
                    <Link href="/Blog">
                        <a>Blog</a>
                    </Link>
                </li>
                <li>
                    <Link href="/Contact">
                        <a>Contacto</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}