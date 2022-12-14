import React from 'react'


function Footer() {
    return (
        <footer className="page-footer">
            <p>&copy; {new Date().getFullYear()} <span>SimplyRecepies </span>
                Build with{" "} Gatsby
            </p>
        </footer>
    )
}

export default Footer