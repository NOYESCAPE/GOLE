import IconBox from '@Component/IconBox/IconBox';
import { MouseEvent } from 'react';
import { Icon } from '@Type/images';
import { XOR } from '@Type/utils';

type LeftOptionProps = XOR<
  {
    isTownSelection: boolean;
  },
  {
    icons: Icon[];
    onClickIcon: (e: MouseEvent<HTMLButtonElement>) => void;
  }
>;

const LeftOption = ({
  isTownSelection,
  icons,
  onClickIcon
}: LeftOptionProps) => {
  if (isTownSelection) {
    return <div>동네 선택 컴포넌트</div>;
  }

  if (icons && onClickIcon) {
    return <IconBox icons={icons} onClickIcon={onClickIcon} />;
  }

  throw new Error('잘못된 prop 전달');
};

export default LeftOption;
