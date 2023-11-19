/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { PropsWithChildren } from 'react';

// type Child = object | null | undefined;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LazyImageWrapper: React.FC<PropsWithChildren<any>> = (props) => {
  const { children } = props;
  const cloneChildren = React.Children.map(children, (child) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    if (React.isValidElement(child) && child.type === 'img') {
      return React.cloneElement(
        child as React.DetailedReactHTMLElement<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
        { loading: 'lazy' },
      );
    }
    return child;
  });

  return <>{cloneChildren}</>;
};

export default LazyImageWrapper;
