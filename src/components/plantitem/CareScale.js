import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faDroplet } from '@fortawesome/free-solid-svg-icons'


function CareScale({ water, light }) {
    let waters = []
    for (let index = 0; index < water; index++) {
        waters.push(<FontAwesomeIcon icon={faDroplet} style={{ color: "#0000ff", }} />)

    }
    let stars = []
    for (let index = 0; index < light; index++) {
        stars.push(<FontAwesomeIcon icon={faStar} style={{ color: "#ffff00", }} />)
    }

    return (
        <>
            <div className='plantItem-sub-element'>
                {
                    waters.map(water => (water))
                }
            </div>
            <div className='plantItem-sub-element'>
                {
                    stars.map(start => (start))
                }
            </div>
        </>
    )
}

export default CareScale