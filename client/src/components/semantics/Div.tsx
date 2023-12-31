import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { SemanticProps } from '../../types/semantic-props';
import { cn } from '../../lib/utils';

function Div({ framer, children, className, style, framerProps, attributes, key }: SemanticProps) {
  type SectionMotionProps = typeof motion.div extends React.FC<infer P> ? P : never;
  return (
    <>
      {framer ? (
        <motion.div {...(framerProps as SectionMotionProps)} className={cn('', className)} style={style} key={key}>
          {children}
        </motion.div>
      ) : (
        <div {...attributes} className={cn('', className)} style={style}>
          {children}
        </div>
      )}
    </>
  );
}

export default memo(Div);
