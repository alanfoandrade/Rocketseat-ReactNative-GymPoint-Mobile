import React from 'react';

import PropTypes from 'prop-types';

import { Container, CheckNumber, CheckDate } from './styles';

export default function Check({ data, ...rest }) {
  return (
    <Container {...rest}>
      <CheckNumber>Check-in #{data.index}</CheckNumber>
      <CheckDate>{data.dateParsed}</CheckDate>
    </Container>
  );
}

Check.propTypes = {
  data: PropTypes.shape({
    index: PropTypes.number,
    dateParsed: PropTypes.string,
    createdAt: PropTypes.string,
  }).isRequired,
};
