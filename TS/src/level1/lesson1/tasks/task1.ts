type BaseOrder<S extends string> = { id: string; status: S };

type PendingOrder = BaseOrder<"pending">;
type ShippedOrder = BaseOrder<"shipped"> & { trackingNumber: string };
type DeliveredOrder = BaseOrder<"delivered"> & { trackingNumber: string; deliveryDate: string };

type Order = PendingOrder | ShippedOrder | DeliveredOrder;

// ✅ Корректный заказ
const order1: Order = { id: "123", status: "shipped", trackingNumber: "TRACK123" };

// ❌ Ошибка: trackingNumber не может быть в pending
// const order2: Order = { id: "123", status: "pending", trackingNumber: "TRACK123" };

// ❌ Ошибка: deliveryDate обязателен для delivered
// const order3: Order = { id: "123", status: "delivered", trackingNumber: "TRACK123" };

type CancelledOrder = BaseOrder<"cancelled"> & { cancellationReason: string };

