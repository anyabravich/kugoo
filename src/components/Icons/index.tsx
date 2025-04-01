import Telegram from "./Telegram";

interface Icons {
  [key: string]: () => React.JSX.Element;
}

const Icons: Icons = {
  telegram: Telegram,
};

export default Icons;
