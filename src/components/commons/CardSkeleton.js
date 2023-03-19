import React from 'react'
import ContentLoader from 'react-content-loader'
import "./CardSkeleton.css";

const CardSkeleton = () => {
    return (
        <div className='listings_area'>
            <div className="container">
                <FadingLoaderCard1 />
                <FadingLoaderCard2 />
                <FadingLoaderCard3 />
                <FadingLoaderCard4 />
                <FadingLoaderCard5 />
            </div>
        </div>
    )
}


const FadingLoaderCard1 = () => {
    return (
        <ContentLoader
            className='skeleton_card'
            backgroundColor="#ababab"
            foregroundColor="#fafafa"
        >
            <rect x="5" y="5" rx="0" ry="0" width="100" height="100" />
            <rect x="160" y="10" rx="5" ry="5" width="250" height="15" />
            <rect x="160" y="40" rx="5" ry="5" width="380" height="9" />
            <rect x="160" y="60" rx="5" ry="5" width="320" height="9" />
            <rect x="160" y="90" rx="5" ry="5" width="35" height="15" />

            <rect x="5" y="115" rx="2" ry="2" width="60" height="20" />
            <rect x="5" y="140" rx="100" ry="100" width="40" height="40" />
            <rect x="60" y="155" rx="5" ry="5" width="60" height="15" />

        </ContentLoader>
    )
}

const FadingLoaderCard2 = () => {
    return (
        <ContentLoader
            className='skeleton_card'
            backgroundColor="#bfbfbf"
            foregroundColor="#fafafa"
        >
            <rect x="5" y="5" rx="0" ry="0" width="100" height="100" />
            <rect x="160" y="10" rx="5" ry="5" width="250" height="15" />
            <rect x="160" y="40" rx="5" ry="5" width="380" height="9" />
            <rect x="160" y="60" rx="5" ry="5" width="320" height="9" />
            <rect x="160" y="90" rx="5" ry="5" width="35" height="15" />

            <rect x="5" y="115" rx="2" ry="2" width="60" height="20" />
            <rect x="5" y="140" rx="100" ry="100" width="40" height="40" />
            <rect x="60" y="155" rx="5" ry="5" width="60" height="15" />

        </ContentLoader>
    )
}

const FadingLoaderCard3 = () => {
    return (
        <ContentLoader
            className='skeleton_card'
            backgroundColor="#dadada"
            foregroundColor="#fafafa"
        >
            <rect x="5" y="5" rx="0" ry="0" width="100" height="100" />
            <rect x="160" y="10" rx="5" ry="5" width="250" height="15" />
            <rect x="160" y="40" rx="5" ry="5" width="380" height="9" />
            <rect x="160" y="60" rx="5" ry="5" width="320" height="9" />
            <rect x="160" y="90" rx="5" ry="5" width="35" height="15" />

            <rect x="5" y="115" rx="2" ry="2" width="60" height="20" />
            <rect x="5" y="140" rx="100" ry="100" width="40" height="40" />
            <rect x="60" y="155" rx="5" ry="5" width="60" height="15" />

        </ContentLoader>
    )
}

const FadingLoaderCard4 = () => {
    return (
        <ContentLoader
            className='skeleton_card'
            backgroundColor="#ececec"
            foregroundColor="#fafafa"
        >
            <rect x="5" y="5" rx="0" ry="0" width="100" height="100" />
            <rect x="160" y="10" rx="5" ry="5" width="250" height="15" />
            <rect x="160" y="40" rx="5" ry="5" width="380" height="9" />
            <rect x="160" y="60" rx="5" ry="5" width="320" height="9" />
            <rect x="160" y="90" rx="5" ry="5" width="35" height="15" />

            <rect x="5" y="115" rx="2" ry="2" width="60" height="20" />
            <rect x="5" y="140" rx="100" ry="100" width="40" height="40" />
            <rect x="60" y="155" rx="5" ry="5" width="60" height="15" />

        </ContentLoader>
    )
}


const FadingLoaderCard5 = () => {
    return (
        <ContentLoader
            className='skeleton_card'
            backgroundColor="#f7f7f7"
            foregroundColor="#fafafa"
        >
            <rect x="5" y="5" rx="0" ry="0" width="100" height="100" />
            <rect x="160" y="10" rx="5" ry="5" width="250" height="15" />
            <rect x="160" y="40" rx="5" ry="5" width="380" height="9" />
            <rect x="160" y="60" rx="5" ry="5" width="320" height="9" />
            <rect x="160" y="90" rx="5" ry="5" width="35" height="15" />

            <rect x="5" y="115" rx="2" ry="2" width="60" height="20" />
            <rect x="5" y="140" rx="100" ry="100" width="40" height="40" />
            <rect x="60" y="155" rx="5" ry="5" width="60" height="15" />

        </ContentLoader>
    )
}



export default CardSkeleton