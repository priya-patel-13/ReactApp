import React, { useState } from 'react'

export default function Addform() {

    const [category, setCategory] = useState('');

    const [color, setColor] = useState('');
    const [storage, setStorage] = useState('');
    const [ram, setRam] = useState('');

    const [colorerr, setColorerr] = useState('');
    const [stoerr, setStoerr] = useState('');
    const [ramerr, setRamerr] = useState('');


    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [no, setNo] = useState('');

    const [nameerr, setNameerr] = useState('');
    const [numerr, setNumerr] = useState('');
    const [noerr, setNoerr] = useState('');



    const [showInputs, setShowInputs] = useState(false);

    const handleClick = () => {


        if (!name) {
            setNameerr("Enter Name");
        }
        else {
            setNameerr("");
        }
        if (!number) {
            setNumerr("Enter Number");
        }
        else {
            setNumerr("");
        }
        if (!no) {
            setNoerr("Enter GST No");
        }
        else {
            setNoerr("");
        }
        setShowInputs(true);
    };

    const submit = (e) => {
        e.preventDefault();
        if (!color) {
            setColorerr("Enter Color");
        }
        else {
            setColorerr("");
        }
        if (!storage) {
            setStoerr("Enter Storage");
        }
        else {
            setStoerr("");
        }
        if (!ram) {
            setRamerr("Enter Ram");
        }
        else {
            setRamerr("");
        }
    }
    return (
        <>


            <div className="main">
              <img src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/amazon-512.png" className='logo' alt="" />

                <form action="">
                 
                    <label className='lb' htmlFor="" >Name:</label><br />
                    <input type="text" className='in1' placeholder='Enter name' onChange={(e) => setName(e.target.value)} /><br />
                    <span>{nameerr}</span><br />

                    <br />
                    <label className='lb' htmlFor="">Mobail no:</label><br />
                    <input type="text" className='in1' placeholder='Enter mobail no' onChange={(e) => setNumber(e.target.value)} /><br />
                    <span>{numerr}</span><br />

                    <br />
                    <label className='lb' htmlFor="">GST no:</label><br />
                    <input type="text" className='in1' placeholder='Enter GST No' onChange={(e) => setNo(e.target.value)} /><br /><br />
                    <span>{noerr}</span><br />

                    <br />

                    <br />
                </form>
            </div><br /><br />
            <select name="" id="" onChange={(e) => setCategory(e.target.value)} >
                <option value="">Category</option>
                <option value="el">Electric</option>
                <option value="cl">Clothing</option>
                <option value="be">Beauty</option>
                <option value="jw">Jwellery</option>
                <option value="wa">Watch</option>
            </select>
            <br /><br /><br />

            {
                category == "el" &&
                <div className='container'>
                    <div className="row">
                        <div className="col col-12">
                            <div>
                                <img src="https://m.media-amazon.com/images/I/41waxmb407L._AC_UF480,480_SR480,480_.jpg" class="img-fluid img2" alt="..." />
                            </div>
                            <div className="text">
                                <p>Samsung Galaxy S23 Ultra 5G AI Smartphone</p>
                                <p>$1,24,999</p>
                                <button onClick={handleClick}>ADD TO CART</button>
                                {showInputs && (
                                    <div className="input-container">
                                        <br />
                                        <input type="text" placeholder="Color : Crystal clear" onChange={(e) => setColor(e.target.value)} /> <br />
                                        <span>{colorerr}</span><br />
                                        <input type="text" placeholder="Storage : 126GB" onChange={(e) => setStorage(e.target.value)} /> <br />
                                        <span>{stoerr}</span><br />
                                        <input type="text" placeholder="Ram : 8GB" onChange={(e) => setRam(e.target.value)} /> <br />
                                        <span>{ramerr}</span><br />

                                        <button onClick={submit}>SUBMIT</button>
                                    </div>
                                )}
                            </div>
                        </div>



                    </div>
                </div>
            
            }



            {
                category == "cl" &&
                <div className='container'>
                    <div className="row">
                        <div className="col col-12">
                            <div>
                                <img src="https://m.media-amazon.com/images/I/61HMaUT1xgL._AC_UL320_.jpg" class="img-fluid img2" alt="..." />
                            </div>
                            <div className="text">
                                <p>Indya Women Pastel Pink Printed Ruffled Pre-Stitched Saree With Blouse</p>
                                <p>$3250</p>
                                <button onClick={handleClick}>ADD TO CART</button>
                                {showInputs && (
                                    <div className="input-container">
                                        <br />
                                        <input type="text" placeholder="Color :your choise " onChange={(e) => setColor(e.target.value)} /> <br />
                                        <span>{colorerr}</span><br />
                                        <input type="text" placeholder="Material : your choise " onChange={(e) => setStorage(e.target.value)} /> <br />
                                        <span>{stoerr}</span><br />
                                        <input type="text" placeholder="Range : your range " onChange={(e) => setRam(e.target.value)} /> <br />
                                        <span>{ramerr}</span><br />

                                        <button onClick={submit}>SUBMIT</button>
                                    </div>
                                )}
                            </div>
                        </div>



                    </div>
                </div>
            }


            {
                category == "be" &&
                <div className='container'>
                    <div className="row">
                        <div className="col col-12">
                            <div>
                                <img src="https://m.media-amazon.com/images/I/51wHGjfYutL._AC_UL320_.jpg" class="img-fluid img2" alt="..." />
                            </div>
                            <div className="text">
                                <p>RENEE Cover-Up Hair Powder- Black, Helps Cover Grey Roots & Bald Spots Instantly, Highly Pigmented, Fuller and Denser, Long-Lasting & Matte Finish, Super-Fine Powder for Flawless Application, 4gm</p>
                                <p>$697</p>
                                <button onClick={handleClick}>ADD TO CART</button>
                                {showInputs && (
                                    <div className="input-container">
                                        <br />
                                        <input type="text" placeholder="Color : your choise" onChange={(e) => setColor(e.target.value)} /> <br />
                                        <span>{colorerr}</span><br />
                                        <input type="text" placeholder="Quantity : your choise " onChange={(e) => setStorage(e.target.value)} /> <br />
                                        <span>{stoerr}</span><br />
                                        <input type="text" placeholder="Range : your range" onChange={(e) => setRam(e.target.value)} /> <br />
                                        <span>{ramerr}</span><br />

                                        <button onClick={submit}>SUBMIT</button>
                                    </div>
                                )}
                            </div>
                        </div>



                    </div>
                </div>
            }



            {
                category == "jw" &&
                <div className='container'>
                    <div className="row">
                        <div className="col col-12">
                            <div>
                                <img src="https://m.media-amazon.com/images/I/41s06liv02L._AC_SR140,110_.jpg" class="img-fluid img2" alt="..." />
                            </div>
                            <div className="text">
                                <p>ZAVERI PEARLS Pink & Green Beads Cluster Drops Kundan Choker Necklace Earring & Ring Set For Women-ZPFK13800</p>
                                <p>$419</p>
                                <button onClick={handleClick}>ADD TO CART</button>
                                {showInputs && (
                                    <div className="input-container">
                                        <br />
                                        <input type="text" placeholder="Color : your choise" onChange={(e) => setColor(e.target.value)} /> <br />
                                        <span>{colorerr}</span><br />
                                        <input type="text" placeholder="Quantity : your choise" onChange={(e) => setStorage(e.target.value)} /> <br />
                                        <span>{stoerr}</span><br />
                                        <input type="text" placeholder="Range : your choise " nChange={(e) => setRam(e.target.value)} /> <br />
                                        <span>{ramerr}</span><br />

                                        <button onClick={submit}>SUBMIT</button>
                                    </div>
                                )}
                            </div>
                        </div>



                    </div>
                </div>
            }



            {
                category == "wa" &&
                <div className='container'>
                    <div className="row">
                        <div className="col col-12">
                            <div>
                                <img src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/12e11454-5b40-4e02-81e3-1da51cbfb28c._CR0,0,1200,628_SX507_QL70_.png" class="img-fluid img2" alt="..." />
                            </div>
                            <div className="text">
                                <p>Noise ColorFit Pro 4 Alpha 1.78" AMOLED Display, Bluetooth Calling Smart Watch, Functional Crown, Metallic Build, Intelligent Gesture Control, Instacharge (Jet Black)</p>
                                <p>$2,499</p>
                                <button onClick={handleClick}>ADD TO CART</button>
                                {showInputs && (
                                    <div className="input-container">
                                        <br />
                                        <input type="text" placeholder="Color : Crystal clear" onChange={(e) => setColor(e.target.value)} /> <br />
                                        <span>{colorerr}</span><br />
                                        <input type="text" placeholder="Material  : your choise" onChange={(e) => setStorage(e.target.value)} /> <br />
                                        <span>{stoerr}</span><br />
                                        <input type="text" placeholder="Range : your choise" onChange={(e) => setRam(e.target.value)} /> <br />
                                        <span>{ramerr}</span><br />

                                        <button onClick={submit}>SUBMIT</button>
                                    </div>
                                )}
                            </div>
                        </div>



                    </div>
                </div>
            }







        </>
    )
}
