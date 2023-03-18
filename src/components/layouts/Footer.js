import React from 'react'

export default function Footer() {
    return (
        <div>
            <p className="text-center" style={ FooterStyle }>Created by <a href="#" target="_blank" rel="noopener noreferrer">Gangsta</a></p>
        </div>
    )
}

const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    bottom: 0,
    padding: "1rem",
    marginTop: "3rem",
    marginBottom: 0,
    width: "100%",
    opacity: ".5"
}
