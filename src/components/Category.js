import React, {Component} from "react";

export default class Category extends Component{
  constructor(props) {
      super(props);
      this.state = {
          categories: [
              {
                  key: 'all',
                  name: "Все товары"
              },
              {
                  key: "chairs",
                  name : "Стулья"
              },
              {
                  key : 'sofa',
                  name : 'Диваны'
              }
          ]
      }
  }

  render() {
      return (
          <div className="categories">
              {this.state.categories.map(el => (
                  <div key={el.key} onClick={() => this.props.chooseCategory(el.key)} className="categories-key">{el.name}</div>
              ))}
          </div>
      )
  }
}