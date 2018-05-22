import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as COLORS from '../../constants/colors';

const Container = styled.div`
  padding: 10px;
  border-bottom: 1px solid ${COLORS.GREY_200};
  background-color: COLORS.WHITE;
`;
Container.displayName = 'Container';

const Text = styled.p`
  color: ${COLORS.BLACK};
  font-size: 14px;
`;
Text.displayName = 'Text';

const Title = Text.extend`
  font-weight: bold;
`;
Title.displayName = 'Title';

const Card = ({ title, body }) => (
  <Container>
    <Title id="card-title">
      {title}
    </Title>
    <Text id="card-body">
      {body}
    </Text>
  </Container>
);

Card.defaultProps = {
  title: 'Anonymous',
};

Card.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string.isRequired,
};

export default Card;
