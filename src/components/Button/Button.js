import PropTypes from 'prop-types';
import { ButtomLoad } from './Button.styled';

export const Button = ({ onClick, children }) => {
  return (
    <ButtomLoad onClick={onClick} type="button">
      {children}
    </ButtomLoad>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
