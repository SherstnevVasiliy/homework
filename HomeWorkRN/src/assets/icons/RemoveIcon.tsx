import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const RemoveIcon = (props: SvgProps) => (
  <Svg
    viewBox="0 0 512 512"
    width={30}
    height={30}
    fill={props.color}
    {...props}>
    <Path
      fill={props.color}
      d="M256 0C114.853 0 0 114.833 0 256s114.853 256 256 256c141.167 0 256-114.833 256-256S397.147 0 256 0zm0 472.341c-119.295 0-216.341-97.046-216.341-216.341S136.705 39.659 256 39.659 472.341 136.705 472.341 256 375.295 472.341 256 472.341z"
    />
    <Path
      fill={props.color}
      d="M355.148 234.386H156.852c-10.946 0-19.83 8.884-19.83 19.83s8.884 19.83 19.83 19.83h198.296c10.946 0 19.83-8.884 19.83-19.83s-8.884-19.83-19.83-19.83z"
    />
  </Svg>
);

export default React.memo(RemoveIcon);
