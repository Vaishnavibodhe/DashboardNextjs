import React from 'react';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import recentOrderData from "./recentOrders";
import Link from 'next/link';
import { getOrderStatus } from './orderStatus'; 
import { format } from 'date-fns'; 
const Payments = () => {
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

      {/* Recent Orders Table */}
      <div className="ml-0 md:ml-64 bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1 mt-4">
        <strong className="text-gray-700 font-medium">Recent Orders</strong>
        <div className="border-x border-gray-200 rounded-sm mt-3 overflow-x-auto">
          {/* Render column names once */}
          <div className="hidden md:flex border-b border-gray-200 py-2">
            <div className="w-1/7 px-4">Order Id</div>
            <div className="w-1/7 px-2">Product ID</div>
            <div className="w-1/7 px-2">Customer Name</div>
            <div className="w-1/7 px-2">Order Date</div>
            <div className="w-1/7 px-10">Order Total</div>
            <div className="w-1/7 px-2">Shipping Address</div>
            <div className="w-1/7 px-2">Order Status</div>
          </div>

          {/* Render order details */}
          {recentOrderData.map((order) => (
            <div key={order.id} className="flex flex-col md:flex-row border-b border-gray-200 py-2">
              <div className="w-full md:w-1/7 px-4 mb-2 md:mb-0">{/* Order Id */}
                <Link href={`/order/${order.id}`}>
                  <span className="text-blue-500"># {order.id}</span>
                </Link>
              </div>
              <div className="w-full md:w-1/7 px-2 mb-2 md:mb-0">{/* Product ID */}
                <Link href={`/product/${order.product_id}`}>
                  <span className="text-blue-500"># {order.product_id}</span>
                </Link>
              </div>
              <div className="w-full md:w-1/7 px-2 mb-2 md:mb-0">{/* Customer Name */}
                <Link href={`/customer/${order.customer_id}`}>
                  <span>{order.customer_name}</span>
                </Link>
              </div>
              <div className="w-full md:w-1/7 px-2 mb-2 md:mb-0">{/* Order Date */}
                {format(new Date(order.order_date), 'dd MMM yyyy')}
              </div>
              <div className="w-full md:w-1/7 px-10 mb-2 md:mb-0">{/* Order Total */}
                {order.order_total}
              </div>
              <div className="w-full md:w-1/7 px-2 mb-2 md:mb-0">{/* Shipping Address */}
                {order.shipment_address}
              </div>
              <div className="w-full md:w-1/7 px-2 mb-2 md:mb-0">{/* Order Status */}
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
