import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="139" cy="140" r="137" />
    <rect x="0" y="296" rx="10" ry="10" width="280" height="24" />
    <rect x="-2" y="345" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="455" rx="10" ry="10" width="95" height="30" />
    <rect x="177" y="428" rx="0" ry="0" width="1" height="1" />
    <rect x="124" y="446" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
