import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="122" cy="132" r="120" />
    <rect x="124" y="214" rx="0" ry="0" width="2" height="11" />
    <rect x="0" y="270" rx="10" ry="10" width="250" height="27" />
    <rect x="4" y="423" rx="11" ry="11" width="90" height="27" />
    <rect x="100" y="416" rx="25" ry="25" width="153" height="45" />
    <rect x="0" y="316" rx="10" ry="10" width="250" height="80" />
  </ContentLoader>
);

export default Skeleton;
