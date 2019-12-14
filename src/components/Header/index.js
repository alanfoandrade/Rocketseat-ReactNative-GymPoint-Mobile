import React from 'react';

import { Container, Logo } from './styles';

export default function Header({ logo }) {
  return (
    <Container>
      <Logo source={logo} />
    </Container>
  );
}
