'use client';

import React from 'react';
import { Article, Footer } from '@/components/semantics/index';
import { gitHubs } from '@/constants';

const FooterBar = () => {
  const [gitHub, setGitHub] = React.useState<GitHubs[]>(gitHubs);
  React.useEffect(() => {
    setGitHub(gitHubs);
  }, []);
  const year = new Date().getFullYear();
  return (
    <Footer className={`pt-6`}>
      <Article attributes={{ id: 'footer-container' }}>
        <p>
          Made with
          <span>
            {` `}💜{` `}
          </span>
          by{` `}
          {gitHub.map((github, index: IndexProps) => (
            <>
              <a href={github.link} key={index} target="_blank" rel="noreferrer noopener">
                {github.name}
              </a>
            </>
          ))}
        </p>
        <p>
          <small>
            Copyright © <span>{year}</span> All rights reserved
          </small>
        </p>
      </Article>
    </Footer>
  );
};

export default FooterBar;
