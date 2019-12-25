import React from 'react';

const Cite = ({cite}) => (
    <div className="media mt-3">
        <div className="media-body">
            <h3 className="mt-0">{cite.name}</h3>
        </div>
    </div>
)

export default Cite