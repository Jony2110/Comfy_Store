// import  { useEffect, useState } from 'react';

// const Orders = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await fetch('https://strapi-store-server.onrender.com/api/orders');
//         const data = await response.json();
//         setOrders(data.data); // Assuming the orders are in the 'data' field
//       } catch (error) {
//         console.error('Failed to fetch orders:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, []);

//   if (loading) {
//     return <div className="container mx-auto p-8">Loading...</div>;
//   }

//   return (
//     <div className="container mx-auto p-8">
//       <h1 className="text-3xl font-bold mb-4">Your Orders</h1>
      
//       <div className="overflow-x-auto">
//         <table className="table w-full">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Address</th>
//               <th>Products</th>
//               <th>Cost</th>
//               <th>Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) => (
//               <tr key={order.id} className="hover:bg-base-200">
//                 <td>{order.attributes.firstName}</td>
//                 <td>{order.attributes.address}</td>
//                 <td>{order.attributes.products?.length || 'N/A'}</td>
//                 <td>${order.attributes.total.toFixed(2)}</td>
//                 <td>{new Date(order.attributes.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {new Date(order.attributes.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Orders;
