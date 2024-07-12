"use client"
import React, { useState } from 'react';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import recentOrderData from './recentOrders';
import Link from 'next/link';
import { getOrderStatus } from './orderStatus';
import { format } from 'date-fns';
import DownloadIcon from '@mui/icons-material/Download';

const Payments = () => {
  const [orderData, setOrderData] = useState(recentOrderData);
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
  const [searchQuery, setSearchQuery] = useState('');

  const sortData = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }

    const sortedData = [...orderData].sort((a, b) => {
      if (key === 'order_total') {
        const totalA = parseFloat(a[key].replace(/,/g, ''));
        const totalB = parseFloat(b[key].replace(/,/g, ''));
        return direction === 'ascending' ? totalA - totalB : totalB - totalA;
      } else if (key === 'order_date') {
        const dateA = new Date(a[key]);
        const dateB = new Date(b[key]);
        return direction === 'ascending' ? dateA - dateB : dateB - dateA;
      }
      return 0;
    });

    setOrderData(sortedData);
    setSortConfig({ key, direction });
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    const filteredData = recentOrderData.filter(order =>
      order.id.toString().includes(e.target.value)
    );
    setOrderData(filteredData);
  };

  const downloadCSV = () => {
    const headers = ['Order Id', 'Product ID', 'Customer Name', 'Order Date', 'Order Total', 'Shipping Address', 'Order Status'];
    const rows = orderData.map(order => [
      order.id,
      order.product_id,
      order.customer_name,
      format(new Date(order.order_date), 'dd MMM yyyy'),
      order.order_total,
      order.shipment_address,
      getOrderStatus(order.current_order_status),
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(e => e.join(',')),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'orders.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row md:ml-64 gap-4">
        <div className="bg-blue-500 shadow-xl text-white rounded-sm p-4 border border-gray-200 flex flex-col items-center md:w-1/4">
          <div className="justify-start py-1">
            <h2>Next Payment</h2>
          </div>
          <div className="flex py-1">
            <h1 className="mr-4 flex items-center"><CurrencyRupeeIcon />2,312.23</h1>
            <span>23 Orders</span>
          </div>
          <div className="bg-blue-600 w-full h-6 text-sm text-white flex justify-center items-center mt-2">Next Payment Clear</div>
        </div>

        <div className="bg-white shadow-xl text-black rounded-sm p-4 border border-gray-200 flex flex-col items-center md:w-1/4">
          <div className="justify-start py-1">
            <h2>Amount Pending</h2>
          </div>
          <div className="flex py-1">
            <h1 className="mr-4 flex items-center"><CurrencyRupeeIcon />92,312.20</h1>
            <span>23 Orders</span>
          </div>
        </div>

        <div className="bg-white shadow-xl rounded-sm p-4 border border-gray-200 flex flex-col items-center md:w-1/4">
          <div className="justify-start py-1">
            <h2>Amount Pending</h2>
          </div>
          <div className="flex py-1">
            <h1 className="mr-4 flex items-center"><CurrencyRupeeIcon />92,312.20</h1>
          </div>
        </div>
      </div>

      {/* Search and Sort Buttons */}
      <div className="ml-0 md:ml-64 bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1 mt-4">
        <div className="flex justify-between items-center">
          <strong className="text-gray-700 font-medium">Recent Orders</strong>
          <input
            type="text"
            placeholder="Search by Order ID"
            value={searchQuery}
            onChange={handleSearch}
            className="border border-gray-300 rounded px-2 py-1"
          />
          <div>
            <button onClick={() => sortData('order_date')} className="bg-white-500 text-black shadow-xl py-1 rounded mr-2">SortO</button>
            <button onClick={() => sortData('order_total')} className="bg-white-500 text-black shadow-xl ml-2 py-1 rounded">SortA</button>
          </div>
          <button onClick={downloadCSV} ><DownloadIcon/></button>
        </div>
        <div className="border-x border-gray-200 rounded-sm mt-3 overflow-x-auto">
          
          <div className="hidden md:flex border-b border-gray-200 py-2">
            <div className="w-1/7 px-4">Order Id</div>
            <div className="w-1/7 px-2">Product ID</div>
            <div className="w-1/7 px-2">Customer Name</div>
            <div className="w-1/7 px-2">Order Date</div>
            <div className="w-1/7 px-10">Order Total</div>
            <div className="w-1/7 px-2">Shipping Address</div>
            <div className="w-1/7 px-2">Order Status</div>
          </div>


          {orderData.map((order) => (
            <div key={order.id} className="flex flex-col md:flex-row border-b border-gray-200 py-2">
              <div className="w-full md:w-1/7 px-4 mb-2 md:mb-0">
                <Link href={`/order/${order.id}`}>
                  <span className="text-blue-500"># {order.id}</span>
                </Link>
              </div>
              <div className="w-full md:w-1/7 px-2 mb-2 md:mb-0">
                <Link href={`/product/${order.product_id}`}>
                  <span className="text-blue-500"># {order.product_id}</span>
                </Link>
              </div>
              <div className="w-full md:w-1/7 px-2 mb-2 md:mb-0">
                <Link href={`/customer/${order.customer_id}`}>
                  <span>{order.customer_name}</span>
                </Link>
              </div>
              <div className="w-full md:w-1/7 px-2 mb-2 md:mb-0">
                {format(new Date(order.order_date), 'dd MMM yyyy')}
              </div>
              <div className="w-full md:w-1/7 px-10 mb-2 md:mb-0">
                {order.order_total}
              </div>
              <div className="w-full md:w-1/7 px-2 mb-2 md:mb-0">
                {order.shipment_address}
              </div>
              <div className="w-full md:w-1/7 px-2 mb-2 md:mb-0">
                {getOrderStatus(order.current_order_status)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Payments;
