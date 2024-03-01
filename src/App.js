import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Category from "./components/Category";

import {Component, useEffect, useState} from "react";

function App() {
    const itemsObj = [
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
        },
    ]
    const itemsJson = JSON.stringify(itemsObj);

    const [items, setItems] = useState(itemsObj);
    const [orders, setOrders] = useState([]);
    const [currentCategories, setCurrentCategories] = useState([]);

        useEffect(() => {
            const storedItems = sessionStorage.getItem('items');
            if (storedItems) {
                setItems(JSON.parse(storedItems));
            }

        }, []);

        useEffect(() => {
            sessionStorage.setItem("items", JSON.stringify(items));
        },[items]);


    const addToOrder = (item) => {
        let isInArray = false;
        orders.forEach((elem) => {
            if (elem.id === item.id) {
                isInArray = true;
            }
        })
        if(!isInArray) {
            setOrders( [...this.state.orders, item]);
        }
    }

    const deleteOrder = (id) => {
        setOrders(orders.filter( el => el.id !== id ))
    }

    const chooseCategory = (category)=> {
        if (category === 'all') {
            setCurrentCategories(items);
            return
        }

        setCurrentCategories( items.filter(el => el.category === category))
    }


    return (
        <div className="wrapper">
            <Header orders={orders} onDelete={deleteOrder}></Header>
            <Category chooseCategory={chooseCategory}/>
            <Items items={currentCategories} onAdd={addToOrder}/>
            <Footer></Footer>
        </div>
    );

}

export default App;
