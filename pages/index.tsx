import Container from "components/Container";
import type { NextPage } from "next";
import styled from "styled-components";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <ul>
          <li>
            <Link href="/components">Компоненты</Link>
          </li>
          <li>
            <Link href="/main">Главная</Link>
          </li>
          <li>
            <Link href="/service">Сервис</Link>
          </li>
          <li>
            <Link href="/cooperation">Сотрудничество</Link>
          </li>
          <li>
            <Link href="/test-drive">Тест-драйв</Link>
          </li>
          <li>
            <Link href="/catalog">Каталог товаров</Link>
          </li>
          <li>
            <Link href="/catalog-detailed">Каталог товаров. Детальная</Link>
          </li>
          <li>
            <Link href="/product">Страница товара</Link>
          </li>
          <li>
            <Link href="/about">О магазине</Link>
          </li>
          <li>
            <Link href="/shipping-payment">Доставка и оплата</Link>
          </li>
          <li>
            <Link href="/stock">Акции</Link>
          </li>
          <li>
            <Link href="/blog">Блог</Link>
          </li>
          <li>
            <Link href="/blog-detailed">Блог. Детальная</Link>
          </li>
          <li>
            <Link href="/contacts">Контакты</Link>
          </li>
          <li>
            <Link href="/basket">Корзина</Link>
          </li>
          <li>
            <Link href="/checkout">Оформление заказа</Link>
          </li>
          <li>
            <Link href="/thanks">Страница спасибо</Link>
          </li>
          <li>
            <Link href="/not-found">404</Link>
          </li>
          <li>
            <Link href="/comparison">Сравнение</Link>
          </li>
          <li>
            <Link href="/favorites">Избранное</Link>
          </li>
        </ul>
      </Container>
    </>
  );
};

export default Home;
