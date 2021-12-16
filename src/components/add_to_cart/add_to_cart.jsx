import Button from '../Button';
import { useCart } from '../../context/cart_context';

function AddToCart({ item }) {
  const { cartItems, onItemAdd, onItemRemove } = useCart();
  const existingCartItem = cartItems.findIndex((i) => i.id === item.id);
  const isItemInCart = existingCartItem !== -1;

  return isItemInCart ? (
    <Button type="danger" onClick={() => onItemRemove(item)}>
      Remove from cart
    </Button>
  ) : (
    <Button onClick={() => onItemAdd(item)}>Add to cart</Button>
  );
}

export default AddToCart;
