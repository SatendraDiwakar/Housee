import React, { Component, createContext } from 'react'

import homeHero from './images/homeHero.jpg'
import housesHero from './images/houseHero.jpg'
import aboutHero from './images/aboutHero.jpg'
import contactHero from './images/contactHero.jpg'

import { data } from './data'

export const HouseContext = createContext(null);

export default class HouseProvider extends Component {

    state = {
        houses: {},
        interiors: [],
        homeHero: "",
        housesHero: "",
        aboutHero: "",
        contactHero: "",
        loading: true
    }

    async getData(items) {
        let tempItems = items.houses.map(itm => {
            let id = itm.id;
            let houseImage = itm.houseImage;
            let houseType = itm.name;
            let price = itm.price;
            let rating = itm.rating;
            let {
                pets,
                breakfast,
                description } = itm;

            let house = {
                id,
                houseImage,
                houseType,
                price,
                rating,
                pets,
                breakfast,
                description
            };

            return house;
        });
        return { tempItems, homeHero, housesHero, aboutHero, contactHero };
    }
    async fetch() {
        await this.getData(data).then((response) => {
            this.setState({
                houses: response.tempItems,
                interiors: data.interiors,
                homeHero: response.homeHero,
                housesHero: response.housesHero,
                aboutHero: response.aboutHero,
                contactHero: response.contactHero,
            }, () => {
                this.setState({
                    loading: false
                })
            })
        })
    }
    componentDidMount() {
        this.fetch();
    }

    render() {
        return <HouseContext.Provider value={{ ...this.state }}>
            {this.props.children}
        </HouseContext.Provider>
    }
}