import React, { useEffect, useState } from 'react'
import '../styles/navbar.css'

function Navbar() {

    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else {
                handleShow(false)
            }
        })

        return () => {
            window.removeEventListener('scroll')
        }
    }, [])

    return (
        <nav className={`navbar navbar-light fixed-top ${show && "show__black"}`}>
            <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" width="90" height="60" alt="Netflix Logo" />
        </nav>
    )
}

export default Navbar
