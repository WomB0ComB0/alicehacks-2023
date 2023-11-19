import React from 'react';
import { Header as Container, Section, Article, Picture, Menu } from '@/components/semantics/index';
import { Button } from '@/components/ui/button';
import { handleRelocation } from '@/utils/index';

const Header = () => {
  return (
    <>
      <Container>
        <Section>
          <Article>
            <h1 className={`text-2xl`}>
              <span className={`text-[#006400]`}>Medi</span>-<span className={`text-[#99c199]`}>Glossary</span>
            </h1>
            <p>
              A free and open-source glossary of medical terms. Based off of the{' '}
              <a
                href="https://www.merriam-webster.com/medical"
                rel="noopener noreferrer"
                target="_blank"
                className={`underline decoration-solid`}
              >
                Merriam-Webster Medical Dictionary
              </a>
              .
            </p>
            <Menu>
              <li>
                <Button className={``} onClick={(e) => handleRelocation(e, '/glossary')}>
                  Glossary
                </Button>
              </li>
              <li>
                <Button className={``} onClick={(e) => handleRelocation(e, '/about')}>
                  About
                </Button>
              </li>
            </Menu>
          </Article>
        </Section>
        <Section>
          <Picture>
            <img src="/assets/images/cta.png" alt="Logo" width={400} height={400} className={``} />
          </Picture>
        </Section>
      </Container>
    </>
  );
};

export default Header;
