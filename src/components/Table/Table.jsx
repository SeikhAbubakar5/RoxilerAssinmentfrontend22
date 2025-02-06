import React, { useEffect, useState, useCallback } from 'react';
import { getTransactions } from '../Services/api';
import "./Table.css";

const TransactionTable = ({ selectedMonth }) => {
  const [transactions, setTransactions] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const fetchTransactions = useCallback(async () => {
    try {
      const { data } = await getTransactions(selectedMonth, page, search);
      setTransactions(data);
    } catch (error) {
      console.error("Failed to fetch transactions:", error);
    }
  }, [selectedMonth, page, search]);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  return (
    <div className="container">
      <div className='Search'>
        <input
          type="text"
          placeholder="Search transactions"
          value={search}
          onChange={handleSearch}
        />
      </div>
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Date of Sale</th>
              <th>Sold</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {transactions.length > 0 ? (
              transactions.map((transaction ,index) => (
                <tr key={transaction.id}>
                  <td>{index+1}</td>
                  <td>{transaction.title}</td>
                  <td>{transaction.description}</td>
                  <td>${transaction.price.toFixed(2)}</td>
                  <td>{new Date(transaction.dateOfSale).toLocaleDateString()}</td>
                  <td>{transaction.sold ? "Yes" : "No"}</td>
                  <td>
                    {transaction.image && (
                      <img
                        src={transaction.image}
                        alt={transaction.title}
                        style={{ width: "80px", height: "80px" }}
                      />
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No Item found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <h4>Page-1 : {page}</h4>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default TransactionTable;
