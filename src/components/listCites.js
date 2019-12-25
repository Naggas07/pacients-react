import React from 'react';
import Cite from './Cite'
import PropTypes from 'prop-types'

const ListCites = ({cites, deleteCite}) => (
    <div className="card mt-5 py-5">
        <div className="card-body">
            <h2 className="card-tittle text-center">Administrar las citas</h2>
            <div className="cites-list">
                {cites.map(cite => (
                    <Cite key={cite.id} cite={cite} deleteCite={deleteCite}/>  
                ))}
            </div>
        </div>
    </div>
)

ListCites.propTypes ={
    cites: PropTypes.array.isRequired,
    deleteCite: PropTypes.func.isRequired
}

export default ListCites