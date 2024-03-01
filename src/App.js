import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Category from "./components/Category";

import {Component} from "react";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            //где мы храним фотки вместо БД или сессион сторэдж
            items: [
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
            ],
            // где мы храним товары в корзине
            orders: [],

            currentCategories: [],
        }
//в методе могу взаимодействовать с состояниями
        this.currentCategories = this.state.items;
        this.addToOrder = this.addToOrder.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);
        this.chooseCategory = this.chooseCategory.bind(this);
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
        this.setState({orders: this.state.orders.filter( el => el.id !== id )})
    }

    chooseCategory(category) {
        if (category === 'all') {
            this.setState({currentCategories: this.state.items})
            return
        }

        this.setState({currentCategories: this.state.items.filter(el => el.category === category)})
    }

    render()    {
        return (
            <div className='wrapper'>
                <Header orders={this.state.orders} onDelete={this.deleteOrder}></Header>
                <Category chooseCategory={this.chooseCategory}/>
                <Items items={this.state.currentCategories} onAdd={this.addToOrder}/>
                <Footer></Footer>
            </div>
        );
    }


}

export default App;
