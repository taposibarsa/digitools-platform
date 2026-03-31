const CartView = ({ cartItems, onRemove }) => {
    if (cartItems.length === 0) {
        return (
            <div className="text-center py-20 text-gray-400">
                <p className="text-2xl mb-2">🛒</p>
                <p className="text-lg font-medium">Your cart is empty</p>
                <p className="text-sm">Add some products first!</p>
            </div>
        );
    }

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="max-w-4xl mx-auto space-y-4">
            {cartItems.map(item => (
                <div key={item.id} className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
                    <img src={item.image} alt={item.name} className="w-12 h-12 object-contain bg-gray-100 rounded-full p-2" />
                    <div className="flex-1">
                        <h3 className="font-bold text-[#101727]">{item.name}</h3>
                        <p className="text-sm text-gray-400">${item.price}</p>
                    </div>
                    <span className="font-bold text-[#101727]">${item.price}</span>
                    <button
                        onClick={() => onRemove(item.id)}
                        className="text-red-400 hover:text-red-600 text-lg font-bold"
                    >
                        Remove
                    </button>
                </div>
            ))}

            {/* Total */}
            <div className="text-right pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                    <p className="text-lg text-[#101727]">Total:</p>
                    <p className="text-xl font-bold text-[#101727]"> ${total}</p>
                </div>
                
                <button className="w-full mt-4 px-8 py-3 rounded-full text-white font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90 transition">
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default CartView;