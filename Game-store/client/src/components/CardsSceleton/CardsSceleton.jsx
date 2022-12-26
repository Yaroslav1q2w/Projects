import React from "react"
import ContentLoader from "react-content-loader"

const CardsSceleton = (props) => (
    <ContentLoader
        className="game__item"
        speed={2}
        width={320}
        height={370}
        viewBox="0 0 320 370"
        backgroundColor="#4d4c4c"
        foregroundColor="#726969"
        {...props}
    >
        <rect x="336" y="166" rx="3" ry="3" width="178" height="6" />
        <rect x="0" y="-3" rx="0" ry="0" width="320" height="182" />
        <rect x="-1" y="191" rx="10" ry="10" width="321" height="66" />
        <rect x="13" y="322" rx="5" ry="5" width="80" height="18" />
        <rect x="139" y="315" rx="10" ry="10" width="140" height="35" />
        <rect x="19" y="275" rx="15" ry="15" width="129" height="25" />
    </ContentLoader>
)

export default CardsSceleton