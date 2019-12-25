import React from 'react';
import Cite from './Cite'

const ListCites = ({cites}) => (
    <div className="card mt-5 py-5">
        <div className="card-body">
            <h2 className="card-tittle text-center">Administrar las citas</h2>
            <div className="cites-list">
                {cites.map(cite => (
                    <Cite key={cite.id} cite={cite}/>  
                ))}
            </div>
        </div>
    </div>
)

export default ListCites