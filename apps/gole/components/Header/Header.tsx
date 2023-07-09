import styled from 'styled-components';
import LeftOption from './Compounds/LeftOption';
import RightOption from './Compounds/RightOption';
import MiddleText from './Compounds/MiddleText';
import { StrictPropsWithChildren } from '@Type/utils';

const Header = ({ children }: StrictPropsWithChildren<object>) => {
  return <Wrapper>{children}</Wrapper>;
};

Header.LeftOption = LeftOption;
Header.RightOption = RightOption;
Header.MiddleText = MiddleText;

export default Header;

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 320px;
  height: 40px;
`;
