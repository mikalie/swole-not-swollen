import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { ListContainer } from '../pages/exercises/styles';

export const PageSelectionOption = ({page, className}) => {
    const [dropdown, setDropdown] = useState(false);
    return (
        <ListContainer className={className}>
            <Link href={page.name} type="button" aria-haspopup="page-selection">
                {page.title}
            </Link>
        </ListContainer>
    )
}