import React from 'react';

function formatT(t) {
    return t ? `?start=${t}` : '';
}

export function Video({ id, t }) {
    return <iframe title={id} width='560' height='315' src={`https://www.youtube.com/embed/${id}${formatT(t)}`} frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>;
}
