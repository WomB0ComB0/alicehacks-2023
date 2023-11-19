import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { SemanticProps } from '../../types/semantic-props';
import { cn } from '../../lib/utils';

function Figure({ framer, children, className, style, framerProps, attributes, key }: SemanticProps) {
  type SectionMotionProps = typeof motion.figure extends React.FC<infer P> ? P : never;
  return (
    <>
        <figure {...attributes} className={cn('', className)} style={style}>
          {children}
        </figure>

    </>
  );
}

export default memo(Figure);
