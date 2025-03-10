import createProductTable from "./Product.js";
import createOrderTable from "./Order.js";
import createOrderItemsTable from "./OrderItem.js";

const initializeDB = () => {
  createProductTable();
  createOrderTable();
  createOrderItemsTable();
};

export default initializeDB;
