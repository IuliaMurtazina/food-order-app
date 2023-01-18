import { useContext } from "react";
import CartContext from "../../../store/cart-context";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext)
  const price = `$${props.price.toFixed(2)}`;

  const addTocartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <span className={classes.price}>{price}</span>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addTocartHandler}/>
      </div>
    </li>
  );
};

export default MealItem;
