export const PAID = {
  id: "paid",
  name: "Paid",
  backgroundColor: "#DFF4D7",
  color: "#51933E",
};

export const UNPAID = {
  id: "unpaid",
  name: "Unpaid",
  backgroundColor: "#FFEDF3",
  color: "#D0678A",
};

export const PENDING = {
  id: "pending",
  name: "Pending",
  backgroundColor: "#FFECDA",
  color: "#E27F23",
};

export const INVOICES = [
  {
    invoice: "INV001",
    paymentStatus: PAID,
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: PENDING,
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: UNPAID,
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: PAID,
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: PAID,
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: PENDING,
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: UNPAID,
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];
