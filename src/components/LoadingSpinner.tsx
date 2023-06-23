import React from 'react'

const LoadingSpinner = () => {
    return (
        <div className="d-flex justify-content-center text-primary py-5">
            <div className="spinner-border" role="status" style={{ width: 5 + 'rem', height: 5 + 'rem' }}>
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default LoadingSpinner