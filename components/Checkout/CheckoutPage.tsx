"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useCart from "@/hooks/useCart";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

import Image from "next/image";
import ShippingAddress from "./../myAccount/ShippingAddress";
import axios from "axios";
import ShippingAddressModal from "./ShippingAddressModal";
import { FaSpinner } from "react-icons/fa";
import { Button } from "../ui/button";
import { Product } from "@/types/product";

interface ServiceLevel {
  name: string;
}

interface ShippingRate {
  object_id: string;
  provider: string;
  servicelevel: ServiceLevel;
  duration_terms: string;
  amount: string;
  currency: string;
}

interface Card {
  id: string;
  name: string;
  streetAddress: string;
  state: string;
  city: string;
  zipCode: string;
}

interface FormData {
  email?: string;
  phone: string;
  deliveryType: "one_time" | "recurring";
  deliveryFrequency?: string;
  addressId?: string;
}

const CheckoutPage = () => {
  const { data: session, status } = useSession();
  const email = session?.user?.email || "";
  const { items } = useCart();
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [temp, setTemp] = useState(false);
  const [selectedShippingRate, setSelectedShippingRate] =
    useState<ShippingRate | null>(null);
  const [shippingRates, setShippingRates] = useState<ShippingRate[] | null>(
    null
  );

  const [products, setProducts] = useState<Product[]>([]);
  const [productLoading, setProductLoading] = useState(false);
  useEffect(() => {
    const fetchProducts = async () => {
      if (items.length === 0) {
        setProducts([]);
        return;
      }

      setProductLoading(true);
      try {
        const productIds = items.map((item) => item.id).join("&id=");
        const res = await fetch(`/api/products?id=${productIds}`);
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setProductLoading(false);
      }
    };

    fetchProducts();
  }, [items]);

  const [formData, setFormData] = useState<FormData | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
  });


  const onSubmit = async (formData: FormData) => {
    if (!selectedCard) {
      if (status === "unauthenticated") {
        toast.error("Please complete your shipping address");
      } else {
        toast.error("Please select a shipping address");
      }
      return;
    }

    setLoading(true);

    try {

      // Step 1: Create Recipient Address
      const recipientAddressResponse = await axios.post(
        "https://api.goshippo.com/addresses",
        {
          name: selectedCard.name,
          street1: selectedCard.streetAddress,
          city: selectedCard.city,
          state: selectedCard.state,
          zip: selectedCard.zipCode,
          country: "US",
          phone: formData.phone,
          email: email,
        },
        {
          headers: {
            Authorization: `ShippoToken ${process.env.NEXT_PUBLIC_SHIPPO_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Shippo Address Created:", recipientAddressResponse.data);
      const recipientAddressId = recipientAddressResponse.data.object_id;

      // Step 2: Create Shipment
      const shipmentResponse = await axios.post(
        "https://api.goshippo.com/shipments",
        {
          address_from: process.env.NEXT_PUBLIC_SENDER_ADDRESS_ID,
          address_to: recipientAddressId,
          parcels: [
            {
              length: "10",
              width: "8",
              height: "4",
              distance_unit: "in",
              weight: "2",
              mass_unit: "lb",
            },
          ], // Replace with actual parcel details
          async: false, // Set to true if you want async processing
        },
        {
          headers: {
            Authorization: `ShippoToken ${process.env.NEXT_PUBLIC_SHIPPO_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Shippo Shipment Created:", shipmentResponse.data);

      // Step 3: Retrieve Shipping Rates
      const rates = shipmentResponse.data.rates;
      setShippingRates(rates);
      console.log("Shipping Rates:", rates);

      // Step 4: Store formData in state
      setFormData(formData);

    } catch (error) {
      console.error("Error in Shippo API:", error);

      // Handle specific error messages from the Shippo API
      if (axios.isAxiosError(error)) {
        const errorResponse = error.response?.data;

        // Check for specific error messages in the response
        if (errorResponse && errorResponse.__all__) {
          // Display the first error message from the API
          toast.error(`Failed to process shipping: ${errorResponse.__all__[0]}`);
        } else if (errorResponse && errorResponse.detail) {
          // Display the detailed error message
          toast.error(`Failed to process shipping: ${errorResponse.detail}`);
        } else {
          // Fallback to a generic error message
          toast.error("Failed to process shipping. Please try again.");
        }
      } else {
        // Handle non-Axios errors
        toast.error("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
      setTemp(true);
    }
  };
  const handleCheckout = async () => {
    if (!selectedCard) {
      if (status === "unauthenticated") {
        toast.error("Please complete your shipping address");
      } else {
        toast.error("Please select a shipping address");
      }
      return;
    }
    if (!selectedShippingRate) {
      toast.error("Please select a shipping carrier choice");
      return;
    }
    if (!formData) {
      toast.error("Form data is missing. Please try again.");
      return;
    }

    setLoading2(true);
    // try {
    //   const lineItems = items.map((item) => ({
    //     id: item.id,
    //     name: item.name,
    //     currentPrice: item.currentPrice,
    //     quantity: item.quantity,
    //     description: `${item.brand} - ${item.volume}`,
    //   }));

    //   const emailToSend = status === "authenticated" ? session?.user?.email : formData?.email || "";

    //   const response = await fetch("/api/checkout", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       items: lineItems,
    //       email: emailToSend,
    //       phone: formData.phone,
    //       shippingName: selectedCard.name,
    //       shippingStreetAddress: selectedCard.streetAddress,
    //       shippingState: selectedCard.state,
    //       shippingCity: selectedCard.city,
    //       shippingZipCode: selectedCard.zipCode,
    //       deliveryType: formData.deliveryType,
    //       deliveryFrequency: formData.deliveryFrequency,
    //       shippingRateId: selectedShippingRate.object_id,
    //       carrier: selectedShippingRate.provider,
    //       shippingAmount: selectedShippingRate.amount,
    //       couponDis: couponData?.discountPerctange,
    //     }),
    //   });

    //   // Log the response status and text
    //   console.log("Response Status:", response.status);
    //   const responseText = await response.text();
    //   console.log("Response Text:", responseText);

    //   if (!response.ok) {
    //     throw new Error(`Server returned ${response.status}: ${responseText}`);
    //   }

    //   // Attempt to parse the response as JSON
    //   const data = JSON.parse(responseText);

    //   if (data.url) {
    //     // clearCart(email);
    //     router.push(data.url);
    //   }
    // } catch (error) {
    //   console.error("Checkout error:", error);
    //   toast.error("Something went wrong!");
    // } finally {
    //   setLoading2(false);
    // }
  };

  const handleCardSelect = (card: Card) => {
    setSelectedCard(card);
    setValue("addressId", card.id);
  };

  const handleAddressSubmit = (address: Card) => {
    setSelectedCard(address);
  };

  // Calculate original total amount (before any discounts)
  const originalTotalAmount = products.reduce((total, product) => {
    const matchingItem = items.find(item => item.id === product.id);
    const quantity = matchingItem ? matchingItem.quantity : 0;
    return total + (product.originalPrice * quantity);
  }, 0);

  // Calculate current total amount (with product-specific discounts)
  const totalAmount = products.reduce((total, product) => {
    const matchingItem = items.find(item => item.id === product.id);
    const quantity = matchingItem ? matchingItem.quantity : 0;
    return total + (product.currentPrice * quantity);
  }, 0);

  // Calculate discount amount
  const discountAmount = originalTotalAmount - totalAmount;

  // Calculate shipping amount
  const shippingAmount = selectedShippingRate?.amount ? parseFloat(selectedShippingRate.amount) : 0;

  // Calculate final total
  const finalTotal = totalAmount + shippingAmount;

  return (
    <main className="bg-white text-black pt-5 pb-16 min-h-[100vh]">
      <article className="w-11/12 mx-auto font-unbounded">
        <Link href="/cart">
          <span className="font-bold flex items-center gap-1 hover:underline mb-4 lg:mb-7">
            <IoIosArrowBack />
            Go back
          </span>
        </Link>
        <section className="flex flex-col-reverse lg:flex-row justify-between gap-4 w-full">
          <div className=" rounded-md flex flex-col-reverse md:grid md:grid-cols-2 gap-6 w-full lg:w-8/12 lg:h-[90vh] md:border border-gray-300">
            <div className="p-0 md:p-6">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6 mt-2 md:mt-0"
              >
                <div className="space-y-6 p-6 md:p-0 bg-white rounded-md">
                  {status === "unauthenticated" && (
                    <div>
                      <label className="block mb-1 font-medium">E-Mail</label>
                      <input
                        type="email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Please enter a valid email address",
                          },
                        })}
                        className={`w-full p-2 border rounded ${errors.email ? "border-red-500" : "border-gray-300"
                          }`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  )}
                  <div>
                    <label className="block mb-1 font-medium">Phone Number</label>
                    <input
                      type="tel"
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9]*$/,
                          message: "Only numbers are allowed"
                        },
                        maxLength: {
                          value: 15,
                          message: "Phone number is too long"
                        }
                      })}
                      className={`w-full p-2 border rounded ${errors.phone ? "border-red-500" : "border-gray-300"
                        }`}
                      onKeyPress={(e) => {
                        if (!/[0-9]/.test(e.key)) {
                          e.preventDefault();
                        }
                      }}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* for small screen */}
                <div className=" block md:hidden pt-2">
                  <div className=" p-6 md:p-0 bg-white rounded-md">
                    <h3 className=" font-semibold pb-4">Cart Total</h3>
                    <div>
                      <p className=" border-b flex justify-between py-2 border-gray-300">
                        <span>{items.length} Items</span>
                        <span className=" font-semibold">
                          ${originalTotalAmount.toFixed(2)}
                        </span>
                      </p>
                      <p className=" border-b flex justify-between py-2 border-gray-300">
                        <span>Discount</span>
                        <span className="font-semibold">
                          -${discountAmount.toFixed(2)}
                        </span>
                      </p>
                      <p className=" border-b flex justify-between py-2 border-gray-300">
                        <span>Shipping</span>
                        <span className="font-semibold">
                          {selectedShippingRate?.amount
                            ? `$${selectedShippingRate.amount}`
                            : "Select shipping rate"}
                        </span>
                      </p>
                    </div>
                    <div className="flex justify-between font-bold mt-2">
                      <span>Total</span>
                      <span>${totalAmount.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {!temp && (
                  <div className="">
                    <Button
                      variant="primary"
                      type="submit"
                      disabled={loading || items.length === 0}
                      className="w-full"
                    >
                      {loading ? (
                        <div className="flex items-center gap-2 justify-center">
                          <span>Generating shipping carrier choices</span>
                          <FaSpinner className="animate-spin" />
                        </div>
                      ) : (
                        "Continue"
                      )}

                    </Button>
                  </div>
                )}

              </form>
              <div className="my-4">
                {shippingRates && (
                  <div className="bg-white p-6 md:p-0 rounded-md">
                    <h3 className="font-semibold lg:font-medium mb-3 lg:mb-2">
                      Select shipping carrier choices:
                    </h3>
                    <div className="space-y-2 h-[12rem] overflow-x-auto scrollbar-thin">
                      {shippingRates.map((rate) => (
                        <label
                          key={rate.object_id}
                          className="flex items-center space-x-3 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="shippingOption"
                            value={rate.object_id}
                            checked={
                              selectedShippingRate?.object_id === rate.object_id
                            }
                            onChange={() => setSelectedShippingRate(rate)}
                            className="form-radio"
                          />
                          <span>
                            <strong>{rate.provider}</strong> -{" "}
                            {rate.servicelevel.name}({rate.duration_terms}):{" "}
                            {rate.amount} {rate.currency}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {temp && (
                <div>
                  <Button
                    variant="primary"
                    onClick={handleCheckout}
                    disabled={loading2 || items.length === 0}
                    className="w-full"
                  >
                    {loading2 ? (
                      <div className="flex items-center gap-2 justify-center">
                        <span>Processing</span>
                        <FaSpinner className="animate-spin" />
                      </div>
                    ) : (
                      "Place Your Order"
                    )}

                  </Button>
                </div>
              )
              }

            </div>

            {/*  */}

            <div className="space-y-6 md:border-l border-gray-300 p-4 md:p-6 bg-white rounded-lg mt-4 lg:mt-0">
              <div>
                <h1 className="text-xl text-center md:text-left font-medium mb-2 md:mb-4 mt-3 md:mt-0">
                  Shipping Address
                </h1>

                {status === "authenticated" ? (
                  <ShippingAddress
                    onSelectCard={handleCardSelect}
                    ischeckoutPage={true}
                  />
                ) : (
                  <ShippingAddressModal
                    selectedCard={selectedCard}
                    onAddressSubmit={handleAddressSubmit}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-4/12 md:border border-gray-300 rounded-md md:p-4 ">
            <div className="space-y-5 w-full max-h-[60vh] overflow-y-scroll scrollbar-thin">
              {productLoading ? (
                // Show shimmer loading state while products are being fetched
                Array(items.length).fill(0).map((_, index) => (
                  <div className="flex gap-5 w-full animate-pulse" key={index}>
                    <div className="p-2 rounded-md shadow-md bg-gray-200">
                      <div className="h-[8rem] w-[8rem]"></div>
                    </div>
                    <div className="flex flex-col mb-2 w-full">
                      <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                      <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                      <div className="h-6 bg-gray-200 rounded w-1/3 mb-2"></div>
                    </div>
                  </div>
                ))
              ) : (
                products.map((product) => {
                  // Find the corresponding item to get the quantity
                  const matchingItem = items.find(item => item.id === product.id);

                  return (
                    <div key={product.id} className="flex gap-5 w-full">
                      <div className="p-2 rounded-md shadow-md border border-gray-200 bg-white md:bg-transparent">
                        <div className="h-[8rem] w-[8rem]">
                          {product.images.length > 0 && (
                            <Image
                              src={product.images[0]?.url}
                              alt={product.name}
                              width={500}
                              height={500}
                              className="h-full w-full object-cover rounded-md"
                            />
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col mb-2">
                        {product.brand && <h3 className="text-sm">{product.brand.name}</h3>}
                        <p className="text-md font-semibold line-clamp-2 overflow-hidden text-ellipsis">
                          {product.name}
                        </p>
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-lg">${product.currentPrice}</p>
                          <del className="text-sm text-gray-500">${product.originalPrice}</del>
                        </div>
                        {matchingItem && (
                          <p className="text-sm">{matchingItem.quantity} pieces</p>
                        )}
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* for large screen */}
            <div className="mt-4 pt-2 hidden md:block">
              <h3 className="font-semibold py-4">Cart Total</h3>
              <div>
                <p className="border-b border-gray-300 flex justify-between py-2">
                  <span>{items.length} Items</span>
                  <span className="font-medium">
                    ${originalTotalAmount.toFixed(2)}
                  </span>
                </p>
                <p className="border-b border-gray-300 flex justify-between py-2">
                  <span>Discount</span>
                  <span className="font-medium">
                    -${discountAmount.toFixed(2)}
                  </span>
                </p>

                <p className="border-b border-gray-300 flex justify-between py-2">
                  <span>Shipping</span>
                  <span className="font-medium">
                    {selectedShippingRate?.amount
                      ? `$${selectedShippingRate.amount}`
                      : "Select shipping rate"}
                  </span>
                </p>
              </div>
              <div className="flex justify-between font-semibold mt-2">
                <span>Total</span>
                <span>
                  ${finalTotal.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>

  );
};

export default CheckoutPage;
