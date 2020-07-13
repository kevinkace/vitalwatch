import React from 'react';

export default function ExtLink({ href, className, children }) {

    return <a href={href} className={className} target='_blank' rel='noreferrer'>{children}</a>;
};
