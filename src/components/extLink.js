import React from 'react';

export default function ExtLink({ href, children }) {
    return <a href={href} target='_blank' rel='noreferrer'>{children}</a>;
};
