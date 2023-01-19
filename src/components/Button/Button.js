import PropTypes from 'prop-types';
import { ButtomLoad } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <ButtomLoad onClick={onClick} type="button">
      Load More
    </ButtomLoad>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
