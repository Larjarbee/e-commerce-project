import React, { useContext, useState, useEffect } from 'react';
import CartContext from '../../store/cart-context';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleActions } from '../../store';
import classes from './Navbar.module.css';

const Navbar = () => {
  const [btnHighLighted, setBtnHighLighted] = useState(false);

  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const dispatch = useDispatch();
  const showSidebar = useSelector((state) => state.toggle.showToggle);

  const toggleStateHandler = () => {
    dispatch(toggleActions.toggleState());
  };

  const btnClasses = `${classes.relative} ${
    btnHighLighted ? classes.bump : ''
  }`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnHighLighted(true);

    const timer = setTimeout(() => {
      setBtnHighLighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  return (
    <React.Fragment>
      <nav className={classes.navbar}>
        <div className={classes.logo}>
          <button onClick={toggleStateHandler}>
            <span class='material-symbols-outlined'>menu</span>
          </button>
          <h3>
            <Link to='/home'>FASHION</Link>
          </h3>
        </div>
        <form className={classes.form}>
          <input type='text' placeholder='Search for products' />
          <button>Search</button>
        </form>
        <ul>
          <li>
            <Link to='/home'>
              <span class='material-symbols-outlined'>person</span>
            </Link>
          </li>
          <li>
            <Link to='/cart' className={btnClasses}>
              <span class='material-symbols-outlined'>shopping_cart </span>
              <span className={classes.absolute}>{numberOfCartItems}</span>
            </Link>
          </li>
        </ul>
      </nav>
      {showSidebar && (
        <aside className={classes.aside} onClick={toggleStateHandler}>
          <ul>
            <li>
              <Link to='/home'>
                <span class='material-symbols-outlined'>home</span>
                <span className={classes.space}>HOME</span>
              </Link>
            </li>
            <li>
              <Link to='/products'>
                <span class='material-symbols-outlined'>store</span>
                <span className={classes.space}>SHOP</span>
              </Link>
            </li>
            <li>
              <Link to='/home'>
                <span class='material-symbols-outlined'>info</span>
                <span className={classes.space}>ABOUT</span>
              </Link>
            </li>
            <li>
              <Link to='/home'>
                <span class='material-symbols-outlined'>contact_page</span>
                <span className={classes.space}>CONTACT</span>
              </Link>
            </li>
          </ul>
        </aside>
      )}
    </React.Fragment>
  );
};

export default Navbar;
