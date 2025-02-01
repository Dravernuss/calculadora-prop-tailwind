export default function OrderTotals() {
  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propina</h2>
        <p>
          Subtotal a pagar: {""}
          <span className="font-black">$0.00</span>
        </p>
        <p>
          Propina: {""}
          <span className="font-black">$0.00</span>
        </p>
        <p>
          Total a Pagar: {""}
          <span className="font-black">$0.00</span>
        </p>
      </div>
    </>
  );
}
