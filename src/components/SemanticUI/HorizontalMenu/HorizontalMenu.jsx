import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import './horizontal-menu.scss';

export default class HorizontalMenu extends Component
{
    state = {
        activeItem: this.props.activeIndex
    }

    handleItemClick = (event, { name }) =>
    {
        this.setState({ activeItem: name });
        this.props.onSelectedMenuItem(name);
    }

    render()
    {
        const menuItems = this.props.categories.map((category, i) => {
            return <Menu.Item
                key={i}
                name={category}
                className={
                    (this.state.activeItem === category)
                        ? 'item-selected'
                        : ''
                }
                onClick={this.handleItemClick}
            />
        });

        return (
            <Menu>
                {menuItems}
            </Menu>
        )
    }
}

