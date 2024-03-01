import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";


import {Component} from "react";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            //где мы храним фотки вместо БД или сессион сторэдж
            items: [
                {
                    id:1,
                    title: 'Sofa',
                    img: '1.jpg',
                    description: '',
                    price: '1200'
                },
                {
                    id:2,
                    title: 'Chair',
                    img: '2.jpg',
                    description: '',
                    price: '2500'
                },
                {
                    id:3,
                    title: 'Table',
                    img: '3.jpg',
                    description: '',
                    price: '1370'
                },
                {
                    id:4,
                    title: 'Sofa',
                    img: '4.jpg',
                    description: '',
                    price: '560'
                },
            ],
            // где мы храним товары в корзине
            orders: [

            ]
        }
//в методе могу взаимодействовать с состояниями
        this.addToOrder = this.addToOrder.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);
    }

    addToOrder(item) {
        let isInArray = false;
        this.state.orders.forEach((elem) => {
            if (elem.id === item.id) {
                isInArray = true;
            }
        })
        if(!isInArray) {
            this.setState( {orders: [...this.state.orders, item]}, () => {
                console.log(this.state.orders)
            })
        }
    }

    deleteOrder(id) {

    }

    render()    {
        return (
            <div className='wrapper'>
                <Header orders={this.state.orders} onDelete={this.deleteOrder}></Header>
                <Items items={this.state.items} onAdd={this.addToOrder}/>
                <Footer></Footer>
            </div>
        );
    }


}

export default App;
