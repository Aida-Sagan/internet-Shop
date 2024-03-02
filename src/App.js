import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items"
import {useState, useEffect} from "react";
import Category from "./components/Category";



function App() {
    const [items, setItems] = useState([
        {
            id:1,
            title: 'Kitchen',
            img: '2.jpg',
            description: '',
            price: '1200',
            category: 'chairs'
        },
        {
            id:2,
            title: 'Chair',
            img: '1.jpg',
            description: '',
            price: '2500',
            category: 'chairs'
        },
        {
            id:3,
            title: 'Chair',
            img: '4.jpg',
            description: '',
            price: '1370',
            category: 'chairs'
        },
        {
            id:4,
            title: 'Sofa',
            img: '3.jpg',
            description: '',
            price: '560',
            category: 'sofa'
        }
    ]);
    const [orders, setOrders] = useState([]);
    const [currentItems, setCurrentItems] = useState([]);

    useEffect(() => {
        const storedItems = sessionStorage.getItem('items');
        if (storedItems) {
            setItems(JSON.parse(storedItems));
        }
    }, []);

    useEffect(() => {
        sessionStorage.setItem("items", JSON.stringify(items));
    },[items]);

    useEffect(() => {
        const storedOrders = localStorage.getItem('orders');
        if (storedOrders) {
            setOrders(JSON.parse(storedOrders));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(orders));
    }, [orders])

    const chooseCategory = (category) =>{
        if (category === 'all') {
            setCurrentItems(items)
            return
        }

        setCurrentItems(items.filter(el => el.category === category));
    }

    const deleteOrder = (id) => {
       setOrders(orders.filter(el => el.id !== id))
    }

    const addToOrder = (item) => {
        if (!orders.find(el => el.id === item.id)) {
            setOrders(prevOrders => [...prevOrders, item]);
        }
    };

    return (
        <div className="wrapper">
            <Header orders={orders} onDelete={deleteOrder} />
            <Category chooseCategory={chooseCategory} />
            <Items items={currentItems} onAdd={addToOrder} />

            {/*{this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}*/}
            <Footer />
        </div>
    )

}

export default App;
