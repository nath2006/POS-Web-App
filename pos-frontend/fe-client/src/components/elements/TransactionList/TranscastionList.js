import React from "react";
import styles from "./index.module.css";

const TransactionList = ({ transcationList }) => {
    return (
        <div className={styles['transaction-list']}>
            {transcationList .map((transactions, index) => {
                return (
                    <div key={index} className={styles['transaction-list__card']}>
                        <h2>{transactions.no_order}</h2>
                        <div className={styles['transaction-list__card__product-list']}>
                            {transactions.products.map((product,indexProduct)=> {
                                return(
                                    <div key={indexProduct} className={styles['transaction-list__card__product-list__text']}>
                                        <p>Nama Produk: {product.product}</p>
                                        <p>Quantity: {product.quantity}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div className={styles['transaction-list__card__pay']}>
                            <p>Total Harga: {transactions.total_price}</p>
                            <p>Total Bayar: {transactions.paid_amount}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default TransactionList;