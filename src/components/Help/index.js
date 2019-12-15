import React from 'react';

import PropTypes from 'prop-types';

import {
  Container,
  OrderTitle,
  Left,
  StatusIcon,
  OrderState,
  OrderDate,
  OrderText,
} from './styles';

export default function Help({ data, ...rest }) {
  return (
    <Container {...rest}>
      <OrderTitle>
        <Left>
          <StatusIcon
            answered={data.answer_at ? 1 : 0}
            name="check-circle"
            size={20}
          />
          <OrderState answered={data.answer_at ? 1 : 0}>
            {data.answer_at ? 'Respondido' : 'Sem resposta'}
          </OrderState>
        </Left>
        <OrderDate>{data.dateParsed}</OrderDate>
      </OrderTitle>
      <OrderText>{data.question}</OrderText>
    </Container>
  );
}

Help.propTypes = {
  data: PropTypes.shape({
    answer_at: PropTypes.string,
    question: PropTypes.string,
    dateParsed: PropTypes.string,
  }).isRequired,
};
