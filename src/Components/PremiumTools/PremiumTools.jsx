import React, { use, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import CartView from '../CartView/CartView';


const PremiumTools = ({ promiseData }) => {
    const data = use(promiseData)

    const [activeTab, setActiveTab] = useState('products');
    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (product) => {
        setCartItems(prev => {
            const exists = prev.find(item => item.id === product.id);
            if (exists) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const handleRemoveFromCart = (productId) => {
        setCartItems(prev => prev.filter(item => item.id !== productId));
    };


    return (
        <div>
            <div className='w-11/12 mx-auto p-30 '>
                <div className='space-y-2.5'>
                    <h2 className='text-[#101727] text-center text-5xl font-extrabold'>Simple, Transparent Pricing</h2>
                    <p className='text-[#627382] text-center'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                    <div className='text-center'>
                        <div className='inline-flex p-1 justify-center gap-4 mt-8 border rounded-full border-[#d4d2d2]'>
                            <button
                                onClick={() => setActiveTab('products')}
                                className={`px-4 py-3 font-bold rounded-full transition-all duration-300 ${activeTab === 'products'
                                    ? 'text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]'
                                    : 'text-[#25065D] border border-[#d4d2d2] hover:text-white hover:bg-linear-to-r hover:from-[#4F39F6] hover:to-[#9514FA]'
                                    }`}
                            > Products</button>
                            <button
                                onClick={() => setActiveTab('cart')}
                                className={`px-4 py-3 font-bold rounded-full transition-all duration-300 ${activeTab === 'cart'
                                    ? 'text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]'
                                    : 'text-[#25065D] border border-[#d4d2d2] hover:text-white hover:bg-linear-to-r hover:from-[#4F39F6] hover:to-[#9514FA]'
                                    }`}
                            >
                                Cart ({cartItems.length})
                            </button>
                        </div>
                    </div>
                </div>
                <div className='max-w-6xl mx-auto px-4 py-16'>
                    {activeTab === 'products' && (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                            {data.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    onAddToCart={handleAddToCart}
                                />
                            ))}
                        </div>
                    )}

                    {activeTab === 'cart' && (
                        <CartView
                            cartItems={cartItems}
                            onRemove={handleRemoveFromCart}
                        />
                    )}
                </div>
            </div>

        </div>
    );
};

export default PremiumTools;