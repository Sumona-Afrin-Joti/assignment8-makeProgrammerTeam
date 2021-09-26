import React, { useEffect, useState } from 'react';
import AddedMember from '../AddedMember/AddedMember';
import Cart from '../Programmer/Cart/Cart';
import Programmer from '../Programmer/Programmer';
import './Programmers.css'
const Programmers = () => {

    const [programmers, setProgrammers] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setProgrammers(data))
    }, [])

    const handleCart = (programmer) => {
        if (cart.indexOf(programmer) === -1) {
            const newCart = [...cart, programmer];
            setCart(newCart);
        }
    }
    return (
        <div className="programmers">
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        {
                            programmers.map(programmer => <Programmer
                                key={programmer.name}
                                programmer={programmer}
                                handleCart={handleCart} ></Programmer>)
                        }
                    </div>
                </div>
                <div className="col-md-3 whole-cart">
                    <Cart cart={cart}></Cart>
                    <div className="addedMembers" >
                        {
                            cart.map(programmer => <AddedMember programmer={programmer}></AddedMember>
                            )
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Programmers;