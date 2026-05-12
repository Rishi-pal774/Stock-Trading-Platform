import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/allOrders")
      .then((res) => {
        setAllOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h3 className="title">
        Orders ({allOrders.length})
      </h3>

      {allOrders.length === 0 ? (
        <div className="orders">
          <div className="no-orders">
            <p>You haven't placed any orders today</p>

            <Link to={"/"} className="btn">
              Get started
            </Link>
          </div>
        </div>
      ) : (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Mode</th>
                <th>Total Value</th>
              </tr>
            </thead>

            <tbody>
              {allOrders.map((order, index) => {
                const totalValue =
                  order.qty * order.price;

                const modeClass =
                  order.mode === "BUY"
                    ? "profit"
                    : "loss";

                return (
                  <tr key={index}>
                    <td>{order.name}</td>

                    <td>{order.qty}</td>

                    <td>
                      {Number(order.price).toFixed(2)}
                    </td>

                    <td className={modeClass}>
                      {order.mode}
                    </td>

                    <td>
                      {totalValue.toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Orders;
