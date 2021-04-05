import React from 'react'
import '../Layout/Card'

export default props =>
    <div>
        <h2>Os Filhos:</h2>
        <div>
            {props.children}
        </div>
    </div>