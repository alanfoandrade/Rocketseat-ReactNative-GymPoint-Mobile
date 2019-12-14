import React from 'react';

import Header from '../../../components/Header';

import logo from '../../../assets/header_logo.png';

import { Wrapper, Container } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header logo={logo} />
      <Container>{children}</Container>
    </Wrapper>
  );
}
