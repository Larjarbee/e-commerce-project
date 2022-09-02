import React from 'react';
import classes from './Summary.module.css';
import './Summary.css';

const Summary = () => {
  return (
    <React.Fragment>
      <h5 className={classes.text}>- WHAT WE OFFER -</h5>
      <section className={classes.summary}>
        <div className={classes.flex}>
          <span class='material-symbols-outlined size-48'>electric_moped</span>
          <div>
            <h3>Quick Delivery</h3>
            <p>We Deliver Everywhere In Nigeria. </p>
          </div>
        </div>
        <div className={classes.flex}>
          <span class='material-symbols-outlined size-48'>store</span>
          <div>
            <h3>Easy Pick Up</h3>
            <p>We Offer Pickups In Lagos</p>
          </div>
        </div>
        <div className={classes.flex}>
          <span class='material-symbols-outlined size-48'>shield</span>
          <div>
            <h3>Secure Payment</h3>
            <p>100% Secure Payment</p>
          </div>
        </div>
        <div className={classes.flex}>
          <span class='material-symbols-outlined size-48'>chat</span>
          <div>
            <h3>Customer Support</h3>
            <p>Available 10am-4pm </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Summary;
