import Link from 'next/link';
import React from 'react';

export const PageSelectionOption = ({page, className}) => {
    return (
        <li className={className}>
            <Link href={page.name} type="button" aria-haspopup="page-selection">
                {page.title}
            </Link>
        </li>
    )
}