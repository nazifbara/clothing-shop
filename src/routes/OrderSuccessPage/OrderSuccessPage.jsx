import { FiCheckCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

function OrderSuccessPage(props) {
  return (
    <div className="container">
      <div className="order-success">
        <FiCheckCircle />

        <p>Your order was successful</p>

        <Button>
          <Link to="/">Return to the home page</Link>
        </Button>
      </div>
    </div>
  );
}

const route = {
  routeProps: {
    path: '/order-success',
    component: OrderSuccessPage,
  },
  name: 'OrderSuccessPage',
};

export default route;
