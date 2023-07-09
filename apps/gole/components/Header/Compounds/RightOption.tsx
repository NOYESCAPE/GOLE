import { Icon } from '@Type/images';
import { XOR } from '@Type/utils';
import { MouseEvent } from 'react';
import IconBox from '@Component/IconBox/IconBox';

type RightOptionProps = XOR<
  {
    text: string;
  },
  {
    icons: Icon[];
    onClickIcon: (e: MouseEvent<HTMLButtonElement>) => void;
  }
>;

const RightOption = ({ text, icons }: RightOptionProps) => {
  if (text) {
    return <button>{text}</button>;
  }

  if (icons) {
    return (
      <IconBox
        icons={icons}
        onClickIcon={() => {
          //
        }}
      />
    );
  }

  throw new Error('잘못된 prop 전달');
};

export default RightOption;
