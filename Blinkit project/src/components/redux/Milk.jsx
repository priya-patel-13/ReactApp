import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBudget, fetchApi, items, removeprice } from '../feature/slice';
import { Link } from 'react-router-dom';
import Header from './Header';
import { current } from '@reduxjs/toolkit';

export default function Milk() {
    const dispatch = useDispatch();

    const [productCounts, setProductCounts] = useState({});

    useEffect(() => {
        dispatch(fetchApi());
    }, [dispatch]);

    const allData = useSelector((state) => state.apiKey?.data || []);
    const record = allData.filter((el) => el.category === 'Milk');

    const handleAddProduct = (product) => {
        setProductCounts((prevCounts) => ({
            ...prevCounts,
            [product.id]: (prevCounts[product.id] || 0) + 1,
        }));
        dispatch(addBudget({ price: product.price, id: product.id , productlist:product }));
        dispatch(items({ change: 1 }));
    };

    const handleRemoveProduct = (product) => {
        setProductCounts((prevCounts) => {
            const currentCount = prevCounts[product.id] || 0;
            if (currentCount <= 0) return prevCounts;
            return {
                ...prevCounts,
                [product.id]: currentCount - 1,
            };
        });
        dispatch(removeprice({ price: product.price, id: product.id}));
        dispatch(items({ change: -1 }));
    };


    return (
        <>
            <Header />

            <div className="h-[80vh]">
                <div className="flex h-[80vh] w-[85%] ml-[7.5%] mt-[20px]">

                    <div className="border w-[24%]">
                        <div className="border overflow-scroll h-[95%]">
                            <div className="h-[100%] ">
                                <Link to="/" >
                                    <button  className="px-5 py-4 w-[100%] h-16 overflow-hidden flex items-center justify-start bg-[#f2f3fa] border-[#0c8222] border-l-4">
                                        <div className='bg-white text-center rounded-md  h-10 overflow-hidden'>
                                            <img className='h-[200%] mr-3' src="https://cdn.grofers.com/app/images/category/cms_images/icon/922_1643384380004.png" alt="no img" />
                                        </div>
                                        <div className='ml-1'>
                                            Milk
                                        </div>
                                    </button>
                                </Link>
                                <Link to="/bread">
                                    <button className="px-5 py-4 w-[100%] h-16 overflow-hidden flex items-center justify-start ">
                                        <div className='bg-white text-center rounded-md  h-10 overflow-hidden'>
                                            <img className='h-[200%] mr-3' src="https://cdn.grofers.com/app/images/category/cms_images/icon/953_1657599742631.png" alt="no img" />
                                        </div>
                                        <div className=' ml-1'>Bread & Pav</div>
                                    </button>
                                </Link>
                                <Link to="/egg">
                                    <button className="px-5 py-4 w-[100%] h-16 overflow-hidden flex items-center justify-start">
                                        <div className='bg-white text-center rounded-md  h-10 overflow-hidden'>
                                            <img className='h-[200%] mr-3' src="https://cdn.grofers.com/app/images/category/cms_images/icon/954_1680251634382.png" alt="no img" />
                                        </div>
                                        <div className=' ml-1'>Eggs</div>
                                    </button>
                                </Link>
                                <Link to="/flex">
                                    <button className="px-5 py-4 w-[100%] h-16 overflow-hidden flex items-center justify-start">
                                        <div className='bg-white text-center rounded-md  h-10 overflow-hidden'>
                                            <img className='h-20 mr-3' src="https://cdn.grofers.com/app/images/category/cms_images/icon/614_1680251576771.png" alt="no img" />
                                        </div>
                                        <div className=' ml-1'>Flekes & Kids Cereals</div>
                                    </button>
                                </Link>
                                <Link to="/muesli">
                                    <button className="px-5 py-4 w-[100%] h-16 overflow-hidden flex items-center justify-start">
                                        <div className='bg-white text-center rounded-md  h-10 overflow-hidden'>
                                            <img className='h-[200%] mr-3' src="https://cdn.grofers.com/app/images/category/cms_images/icon/614_1680251576771.png" alt="no img" />
                                        </div>
                                        <div className=' ml-1'>Muesli & Granola</div>
                                    </button>
                                </Link>
                                <Link to="/oats">
                                    <button className="p-5 py-4 w-[100%] h-16 overflow-hidden flex item-center justify-start ">
                                        <div className='bg-white text-center rounded-md  h-10 overflow-hidden'>
                                            <img className='h-[200%] mr-3' src="https://cdn.grofers.com/app/images/category/cms_images/icon/584_1680251645977.png" alt="no img" />
                                        </div>
                                        <div className=' ml-1'>Oats</div>
                                    </button>
                                </Link>
                                <Link to="/paneer">
                                    <button className="p-5 py-4 w-[100%] h-16 overflow-hidden flex item-center justify-start">
                                        <div className='bg-white text-center rounded-md  h-10 overflow-hidden'>
                                            <img className='h-[200%] mr-3' src="https://cdn.grofers.com/app/images/category/cms_images/icon/923_1643384369257.png" alt="no img" />
                                        </div>
                                        <div className=' ml-1'>Paneer & Tofu</div>
                                    </button>
                                </Link>
                                <Link to="/curd">
                                    <button className="p-5 py-4 w-[100%] h-16 overflow-hidden flex item-center justify-start">
                                        <div className='bg-white text-center rounded-md  h-10 overflow-hidden'>
                                            <img className='h-[200%] mr-3' src="https://cdn.grofers.com/app/images/category/cms_images/icon/123_1643384414434.png" alt="no img" />
                                        </div>
                                        <div className=' ml-1'>Curd & Yogurt</div>
                                    </button>
                                </Link>
                                <Link to="/butter">
                                    <button className="p-5 py-4 w-[100%] h-16 overflow-hidden flex item-center justify-start">
                                        <div className='bg-white text-center rounded-md  h-10 overflow-hidden'>
                                            <img className='h-[200%] mr-3' src="https://cdn.grofers.com/app/images/category/cms_images/icon/952_1657599773117.png" alt="no img" />
                                        </div>
                                        <div className=' ml-1'>Butter & More</div>
                                    </button>
                                </Link>
                                <Link to="/cream">
                                    <button className="p-5 py-4 w-[100%] h-16 overflow-hidden flex item-center justify-start">
                                        <div className='bg-white text-center rounded-md  h-10 overflow-hidden'>
                                            <img className='h-[200%] mr-3' src="https://cdn.grofers.com/app/images/category/cms_images/icon/1092_1643384330629.png" alt="no img" />
                                        </div>
                                        <div className=' ml-1'>Cream & Whitener</div>
                                    </button>
                                </Link>
                                <Link to="/cmilk">
                                    <button className="p-5 py-4 w-[100%] h-16 overflow-hidden flex item-center justify-start">
                                        <div className='bg-white text-center rounded-md  h-10 overflow-hidden'>
                                            <img className='h-[200%] mr-3' src="https://cdn.grofers.com/app/images/category/cms_images/icon/130_1643384401123.png" alt="no img" />
                                        </div>
                                        <div className='ml-1'>Condensed Milk</div>
                                    </button>
                                </Link >
                                <Link to="/vermicell">
                                    <button className="p-5 py-4 w-[100%] h-16 overflow-hidden flex item-center justify-start">
                                        <div className='bg-white text-center rounded-md  h-10 overflow-hidden'>
                                            <img className='h-[200%] mr-3' src="https://cdn.grofers.com/app/images/category/cms_images/icon/1140_1643384951835.png" alt="no img" />
                                        </div>
                                        <div className=' ml-1'>Vermicelli</div>
                                    </button>
                                </Link >
                                <Link to="/poha">
                                    <button className="p-5 py-4 w-[100%] h-16 overflow-hidden flex item-center justify-start">
                                        <div className='bg-white text-center rounded-md  h-10 overflow-hidden'>
                                            <img className='h-[200%] mr-3' src="https://cdn.grofers.com/app/images/category/cms_images/icon/1295_1643445863467.png" alt="no img" />
                                        </div>
                                        <div className=' ml-1'>Poha, Daliya & Other</div>
                                    </button>
                                </Link >
                                <Link to="/pbutter">
                                    <button className="p-5 py-4 w-[100%] h-16 overflow-hidden flex item-center justify-start">
                                        <div className='bg-white text-center rounded-md  h-10 overflow-hidden'>
                                            <img className='h-[200%] mr-3' src="https://cdn.grofers.com/app/images/category/cms_images/icon/644_1690196367179.png" alt="no img" />
                                        </div>
                                        <div className=' ml-1'>Peanut Butter </div>
                                    </button>
                                </Link>
                                <Link to="/bars">
                                    <button className="p-5 py-4 w-[100%] h-16 overflow-hidden flex item-center justify-start">
                                        <div className='bg-white text-center rounded-md  h-10 overflow-hidden'>
                                            <img className='h-[200%] mr-3' src="https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1700735371138-2" alt="no img" />
                                        </div>
                                        <div className=' ml-1'>Energy Bars</div>
                                    </button>
                                </Link >
                                <Link to="/lassi">
                                    <button className="p-5 py-4 w-[100%] h-16 overflow-hidden flex item-center justify-start">
                                        <div className='bg-white text-center rounded-md  h-10 overflow-hidden'>
                                            <img className='h-[200%] mr-3' src="https://cdn.grofers.com/app/images/category/cms_images/icon/1184_1661407202472.png" alt="no img" />
                                        </div>
                                        <div className='ml-1'>Lassi, Shakes & More</div>
                                    </button>
                                </Link >
                                <Link to="/breakfast">
                                    <button className="p-5 py-4 w-[100%] h-16 overflow-hidden flex item-center justify-start">
                                        <div className='bg-white text-center rounded-md  h-10 overflow-hidden'>
                                            <img className='h-[200%] mr-3' src="https://cdn.grofers.com/app/images/category/cms_images/icon/1612_1666261789562.png" alt="no img" />
                                        </div>
                                        <div className='ml-1'>Breackfast Mixes</div>
                                    </button>
                                </Link >
                                <Link to="/honey">
                                    <button className="p-5 py-4 w-[100%] h-16 overflow-hidden flex item-center justify-start">
                                        <div className='bg-white text-center rounded-md  h-10 overflow-hidden'>
                                            <img className='h-[200%] mr-3' src="https://cdn.grofers.com/app/images/category/cms_images/icon/609_1695366756108.png" alt="no img" />
                                        </div>
                                        <div className='ml-1'>Honey & Chyawanprash</div>
                                    </button>
                                </Link >
                                <Link to="/batter">
                                    <button className="p-5 py-4 w-[100%] h-16 overflow-hidden flex item-center justify-start">
                                        <div className='bg-white text-center rounded-md  h-10 overflow-hidden'>
                                            <img className='h-[200%] mr-3' src="https://cdn.grofers.com/app/images/category/cms_images/icon/1425_1643613254262.png" alt="no img" />
                                        </div>
                                        <div className=' ml-1'>Batter</div>
                                    </button>
                                </Link >
                            </div >
                        </div>
                       
                    </div>

                   

                    <div className="border overflow-scroll h-[95%] bg-[#f2f3fa] w-[72%]">
                        <div>
                            <h1>Buy Milk Online</h1>
                        </div>
                        <div className="flex flex-wrap border overflow-scroll h-[95%] px-[3px] bg-[#f5f6fd] w-[100%]">
                            {record.map((product) => (
                                <div
                                    key={product.id}
                                    className="w-[180px] mx-[3px] my-[3px] border-[1px] border-gray-300 bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all"
                                >
                                    <img
                                        className="w-full h-40 object-contain p-2"
                                        src={product.img}
                                        alt={product.title || 'Product'}
                                    />
                                    <div className="p-4">
                                        <h1 className="text-sm font-medium text-gray-800 truncate mb-2">
                                            {product.title || 'Product Title'}
                                        </h1>
                                        <p className="text-xs text-gray-600 mb-3">{product.weight || 'Weight'}</p>
                                        <div className="flex items-center justify-around px-4 py-1  text-green-700 text-sm font-medium ">
                                            <p className='text-lg font-bold text-gray-900'>₹{product.price || 'N/A'}</p>

                                            <div className='border-green-600 border rounded bg-[#f5f6fd] text-green-700 ml-5 px-4 py-1'>
                                            {productCounts[product.id] > 0 ? (
                                                <div className="flex items-center ">
                                                    <button  onClick={() => handleRemoveProduct(product)} className=" bg-[#f5f6fd] text-green-700 px-1 py-1" >
                                                        -
                                                    </button>
                                                    <p>{productCounts[product.id]}</p>
                                                    <button onClick={() => handleAddProduct(product)} className=" bg-[#f5f6fd] text-green-700 px-1 py-1">
                                                        +
                                                    </button>
                                                </div>
                                            ) : (
                                                <button onClick={() => handleAddProduct(product)} className=" bg-[#f5f6fd] text-green-700 px-1 py-1">
                                                    ADD
                                                </button>
                                            )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

