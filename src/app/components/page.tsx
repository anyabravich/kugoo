import Container from "@/components/Container";

import H2 from "@/components/Titles/H2";
import Card from "@/components/Card";
import Label from "@/components/Label";
import items from "../../mock/accordion";
import Accordion from "@/components/Accordion";
import LinkDefault from "@/components/LinkDefault";
import Article from "@/components/Article";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";

const ComponentsPages = () => {
  return (
    <div>
      <Container>
        <p>Хлебные крошки</p>
        <div>
          <Breadcrumbs />
        </div>
        <p>Этикетки</p>
        <div>
          <Label>Рассрочка</Label>
        </div>
        <p>Ссылки</p>
        <div>
          <LinkDefault text={"LinkDefault"} />
        </div>
        <p>Заголовки</p>
        <div>
          <H2>h2</H2>
        </div>
        <p>Кнопки</p>
        <div>
          <Button>ButtonDefault</Button>
        </div>
        <p>Карточки</p>
        <div>
          <Card labelText="Хит" labelColor="green" />
        </div>
        <p>Статья</p>
        <div>
          <Article
            img={"/images/pages/blog/blog-1.png"}
            title={"Как правильно заряжать электросамокат"}
            description={
              "Один из первых вопросов, который волнует после покупки электросамоката."
            }
            date={"01.09.2021"}
            views={53}
          />
        </div>
        <p>Аккордеон</p>
        <div>
          <Accordion items={items} />
        </div>
      </Container>
    </div>
  );
};

export default ComponentsPages;
