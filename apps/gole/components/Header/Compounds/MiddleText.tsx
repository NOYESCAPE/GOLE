import styled from 'styled-components';

interface MiddleTextProps {
  text: string;
}

const MiddleText = ({ text }: MiddleTextProps) => {
  return <Wrapper>{text}</Wrapper>;
};

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export default MiddleText;
