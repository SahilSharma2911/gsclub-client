"use client";
import React, { useState } from "react";
import ShippingAddress from "./ShippingAddress";
import Logout from "./Logout";
import Settings from "./Settings";
import { Order } from "@/types/order";
import OrderHistoryPopUp from "./OrderHistoryPopUp";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import useCart from "@/hooks/useCart";

interface OrderHistoryProps {
  selectOpt: string;
  orders: Order[];
}

const OrderHistory = ({ selectOpt, orders }: OrderHistoryProps) => {
  const [orderDetails, setOrderDetails] = useState(false);
  const [singleOrderDetails, setSingleOrderDetails] = useState<Order>();
  const { data: session } = useSession();
  const router = useRouter();
  const { addItem } = useCart();

  const DateFormatted = (date: string) => {
    const newDate = new Date(date);
    const day = newDate.getUTCDate();
    const month = newDate.toLocaleString("default", { month: "short" });
    const year = newDate.getUTCFullYear();
    return `${day} ${month}, ${year}`;
  };

  const detailsForSingleProduct = (id: string) => {
    setOrderDetails(true);
    const allData = orders.find((order) => order.id === id);
    if (allData) {
      setSingleOrderDetails(allData);
    } else {
      console.error("Order not found with ID:", id);
    }
  };

  const handleReorder = async (orderId: string) => {
    try {
      const res = await fetch("/api/reorder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId }),
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error("Could not reorder");
        return;
      }
      const email = session?.user?.email ?? null;
      for (const item of data.items) {
        await addItem(email, { id: item.id, quantity: item.quantity });
      }
      toast.success("Items added to cart!");
      router.push("/cart");
    } catch {
      toast.error("Something went wrong");
    }
  };

  const showOrderTable =
    selectOpt === "My orders" || selectOpt === "Purchase history";

  return (
    <div>
      {showOrderTable && (
        <div>
          <h2 className="text-xl font-medium pl-6 py-4 hidden md:block">
            Order History
          </h2>
          <h2 className="text-base font-bold px-1 py-3 block md:hidden">
            Order History
          </h2>

          {/* ---- DESKTOP: table view ---- */}
          <div className="hidden md:block h-[70vh] overflow-y-auto scrollbar-thin">
            <table className="w-full text-left font-plusSans">
              <thead>
                <tr className="bg-[#F2F2F2] font-medium">
                  <th className="border-b border-gray-200 p-2 font-medium px-6">
                    ORDER ID
                  </th>
                  <th className="border-b border-gray-200 p-2 font-medium">
                    DATE
                  </th>
                  <th className="border-b border-gray-200 p-2 font-medium">
                    TOTAL
                  </th>
                  <th className="border-b border-gray-200 p-2 font-medium">
                    ACTION
                  </th>
                  <th className="border-b border-gray-200 p-2 font-medium">
                    {""}
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td className="border-b border-gray-300 px-6 py-2 font-semibold">
                      #{order.orderNumber ?? order.id.slice(-8).toUpperCase()}
                    </td>
                    <td className="border-b border-gray-300 p-2">
                      {DateFormatted(order.createdAt.toString())}
                    </td>
                    <td className="border-b border-gray-300 p-2">
                      ${order.totalAmount.toFixed(2)} (
                      {order.orderItems.reduce(
                        (total, item) => total + item.quantity,
                        0
                      )}{" "}
                      items)
                    </td>
                    <td className="border-b border-gray-300 p-2">
                      <button
                        onClick={() => handleReorder(order.id)}
                        style={{
                          background: "linear-gradient(90deg, #F5A623, #FF6B00)",
                          color: "#fff",
                          border: "none",
                          borderRadius: "50px",
                          padding: "6px 14px",
                          fontSize: "11px",
                          fontWeight: 700,
                          cursor: "pointer",
                        }}
                      >
                        Reorder
                      </button>
                    </td>
                    <td
                      onClick={() => detailsForSingleProduct(order.id)}
                      className="border-b border-gray-300 p-2 text-green hover:underline cursor-pointer"
                    >
                      View Details
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ---- MOBILE: card view ---- */}
          <div className="block md:hidden overflow-y-auto" style={{ maxHeight: "72vh" }}>
            {orders.length === 0 && (
              <p className="text-center text-gray-400 py-12 text-sm">
                No orders yet.
              </p>
            )}
            {orders.map((order) => (
              <div
                key={order.id}
                style={{
                  border: "1px solid #e5e7eb",
                  borderRadius: 12,
                  padding: "16px",
                  marginBottom: 12,
                  background: "#fff",
                }}
              >
                {/* Row 1: order number + date */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 10,
                  }}
                >
                  <span style={{ fontWeight: 700, fontSize: 14 }}>
                    #{order.orderNumber ?? order.id.slice(-8).toUpperCase()}
                  </span>
                  <span style={{ fontSize: 12, color: "#6b7280" }}>
                    {DateFormatted(order.createdAt.toString())}
                  </span>
                </div>

                {/* Row 2: total + actions */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <div>
                    <span style={{ fontWeight: 700, color: "#111", fontSize: 15 }}>
                      ${order.totalAmount.toFixed(2)}
                    </span>
                    <span style={{ fontSize: 11, color: "#9ca3af", marginLeft: 6 }}>
                      {order.orderItems.reduce((t, i) => t + i.quantity, 0)} items
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <span
                      onClick={() => detailsForSingleProduct(order.id)}
                      style={{
                        fontSize: 12,
                        color: "#F5A623",
                        cursor: "pointer",
                        fontWeight: 600,
                        textDecoration: "underline",
                      }}
                    >
                      Details
                    </span>
                    <button
                      onClick={() => handleReorder(order.id)}
                      style={{
                        background: "linear-gradient(90deg, #F5A623, #FF6B00)",
                        color: "#fff",
                        border: "none",
                        borderRadius: 50,
                        padding: "8px 20px",
                        fontSize: 12,
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      Reorder
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order detail popup */}
          <OrderHistoryPopUp
            orderDetails={orderDetails}
            singleOrderDetails={singleOrderDetails}
            setOrderDetails={setOrderDetails}
            DateFormatted={DateFormatted}
          />
        </div>
      )}

      {selectOpt === "Shipping addresses" && (
        <ShippingAddress ischeckoutPage={false} />
      )}
      {selectOpt === "Settings" && <Settings />}
      {selectOpt === "Log-out" && <Logout />}
    </div>
  );
};

export default OrderHistory;
