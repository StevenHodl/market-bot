import React from 'react'
import ContentLoader from 'react-content-loader'
import "./ListingSkeleton.css";


const ListingSkeleton = () => {
    return (
        <div className="container">
            <FadingLoaderListing />
        </div>

    )
}

const FadingLoaderListing = () => {
    return (<ContentLoader
        backgroundColor="#dadada"
        foregroundColor="#fafafa"
        height="600px"        >
        <rect x="5" y="5" rx="0" ry="0" width="300" height="300" />
        <rect x="5" y="320" rx="5" ry="5" width="100" height="30" />
        <rect x="5" y="370" rx="100" ry="100" width="500" height="1" />
        <rect x="5" y="390" rx="5" ry="5" width="300" height="15" />
        <rect x="5" y="420" rx="5" ry="5" width="300" height="15" />
        <rect x="5" y="450" rx="5" ry="5" width="150" height="15" />
        <rect x="5" y="480" rx="100" ry="100" width="500" height="1" />
        <rect x="5" y="500" rx="100" ry="100" width="80" height="80" />
        <rect x="110" y="530" rx="5" ry="5" width="120" height="15" />
        <rect x="110" y="560" rx="5" ry="5" width="90" height="15" />
        <rect x="5" y="590" rx="100" ry="100" width="500" height="1" />
    </ContentLoader >)
}


export default ListingSkeleton