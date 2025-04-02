import Plus from "./Plus";
import Telegram from "./Telegram";
import Viber from "./Viber";
import WhatsApp from "./WhatsApp";

interface Icons {
  [key: string]: () => React.JSX.Element;
}

const Icons: Icons = {
  telegram: Telegram,
  viber: Viber,
  whatsapp: WhatsApp,
  plus: Plus,
};

export default Icons;
