import PropTypes from "prop-types";
import { NoFeedback } from './Notification.styled';

function Notification ({ message }) {
return <NoFeedback>{message}</NoFeedback>;
}

Notification.propTypes = {
    message: PropTypes.string,
  };
export default Notification;