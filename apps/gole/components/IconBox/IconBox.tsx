import { Icon } from '@Type/images';
import styled from 'styled-components';
import Image from 'next/image';
import { MouseEvent } from 'react';

interface IconBoxProps {
  icons: Icon[];
  spaceBetween?: string;
  onClickIcon: (e: MouseEvent<HTMLButtonElement>) => void;
}

const IconBox = ({
  icons,
  spaceBetween = '6px',
  onClickIcon
}: IconBoxProps) => (
  <Wrapper spaceBetween={spaceBetween} onClick={onClickIcon}>
    {icons.map((icon) => (
      <Image
        key={icon}
        data-icon={icon}
        alt={`${icon} 아이콘`}
        width="24"
        height="24"
        src={`/icons/${icon}.svg`}
      />
    ))}
  </Wrapper>
);

export default IconBox;

const Wrapper = styled.button<{
  spaceBetween: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;

  img + img {
    margin-left: ${({ spaceBetween }) => spaceBetween};
  }
`;
