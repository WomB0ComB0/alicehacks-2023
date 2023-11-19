import { Section, Picture, Main } from '../../semantics/index';

const ScreenLoader = () => (
  <Main className="flex flex-col items-center justify-center w-full h-screen">
    <Section className="flex items-center justify-center h-screen bg-[rgb(36,36,36)] text-white flex-col w-full">
      <Picture
        className={`
          relative transition-all select-none animate-pulse h-52 w-52
        `}
      >
        <img
          className="absolute object-contain mt-2 transition-all select-none animate-pulse h-52 w-52"
          src="/assets/images/logo.png"
          alt="Loading..."
          loading="eager"
          width={200}
          height={200}
        />
      </Picture>
    </Section>
  </Main>
);

export default ScreenLoader;
