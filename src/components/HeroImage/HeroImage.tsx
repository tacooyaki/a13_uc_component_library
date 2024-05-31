import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const StyledHero = styled.div<{ bgImage: string; disabled?: boolean }>`
  width: 100%;
  height: 400px;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  text-shadow: 1px 1px 2px black;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  background-blend-mode: ${(props) => (props.disabled ? 'darken' : 'normal')};
`;

const HeroImage: React.FC<HeroImageProps> = ({ bgImage, text, disabled }) => (
  <StyledHero bgImage={bgImage} disabled={disabled} data-testid="hero-image">
    {text}
  </StyledHero>
);

export default HeroImage;
