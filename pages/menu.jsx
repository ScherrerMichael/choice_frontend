import React, { Component, createRef } from 'react';

export default function Menu({ data }) {
    const Appetizers = createRef();
    const KFC = createRef();
    const Entrees = createRef();
    const Teriyaki = createRef();
    const Combinations = createRef();
    const Specials = createRef();
    return (
        <>
            {/* <Header></Header> */}
            <div className="menu-wrapper backgound-img">
                <div className="menu-left">
                    <div className="item-groups">
                        <button className="button" onClick={() => {
                            Appetizers.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }}>Appetizers</button>

                        <button className="button" onClick={() => {
                            KFC.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }}>KFC</button>

                        <button className="button" onClick={() => {
                            Entrees.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }}>Entrees</button>

                        <button className="button" onClick={() => {
                            Teriyaki.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }}>Teriyaki</button>

                        <button className="button" onClick={() => {
                            Combinations.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }}>Combinations</button>

                        {/* <button className="button" onClick={() => {
                                this.Specials.current.scrollIntoView({behavior: 'smooth'});
                            }}>Specials</button> */}
                    </div>
                </div>
                <div className="menu-middle">
                    <h2 className="menu-title">Menu</h2>
                    <ItemGroup refProp={Appetizers} name={'Appetizers'}></ItemGroup>
                {data.appetizers.map((food, i) => (
                    <MenuItem key={'appetizers - ' + i} name={food.name} price={food.price}></MenuItem>
                ))}
                    <ItemGroup refProp={KFC} name={'KFC'}></ItemGroup>
                {data.kfc.map((food, i) => (
                    <MenuItem key={'appetizers - ' + i} name={food.name} price={food.price}></MenuItem>
                ))}
                    <ItemGroup refProp={Entrees} name={'Entrees'}></ItemGroup>
                {data.entrees.map((food, i) => (
                    <MenuItem key={'appetizers - ' + i} name={food.name} price={food.price}></MenuItem>
                ))}
                    <ItemGroup refProp={Teriyaki} name={'Teriyaki'}></ItemGroup>
                {data.teriyaki.map((food, i) => (
                    <MenuItem key={'appetizers - ' + i} name={food.name} price={food.price}></MenuItem>
                ))}
                    <ItemGroup refProp={Combinations} name={'Combinations'}></ItemGroup>
                    <div>Standard Combos</div>
                    <MenuItem name={'Chicken Teriyaki Combo'} price={'$3.45'}></MenuItem>
                    <MenuItem name={'Spicy Chicken Teriyaki Combo'} price={'$3.45'}></MenuItem>
                    <MenuItem name={'Chicken Katsu Combo'} price={'$3.45'}></MenuItem>
                    <MenuItem name={'Beef Teriyaki Combo'} price={'$3.45'}></MenuItem>
                    <div>Half and Half Combos</div>
                    <MenuItem name={'Chicken Teriyaki & Katsu Combo'} price={'$3.45'}></MenuItem>
                    <MenuItem name={'Spicy Chicken & Katsu Combo'} price={'$3.45'}></MenuItem>
                    <MenuItem name={'Chicken & Beef Teriyaki Combo'} price={'$3.45'}></MenuItem>
                    <MenuItem name={'Chicken & Shrimp Teriyaki Combo'} price={'$3.45'}></MenuItem>
                    <MenuItem name={'Spicy Chicken & Shrimp Combo'} price={'$3.45'}></MenuItem>
                    <MenuItem name={'Chicken & Short Rib Combo'} price={'$3.45'}></MenuItem>
                </div>
                <div className="menu-right"></div>
            </div>
            {/* <Footer></Footer> */}
        </>
    );
}

class ItemGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: String,
        }
    }
    render() {
        const {
            name,
        } = this.props
        return (
            <div ref={this.props.refProp} className="item-group">
                <strong>{name}</strong>
            </div>
        );
    }
}


class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: String,
            price: String,
        }
    }
    render() {
        const {
            name,
            price,
        } = this.props
        return (
            <div className="item">
                <div className="item-name">{name}</div>
                <div className="item-price">{price}</div>
            </div>
        );
    }
}

function comapare_name(a, b) {
    if (a.name.toLowerCase() < b.catagory.toLowerCase()) {
        return -1;
    }
    if (a.name.toLowerCase() > b.catagory.toLowerCase()) {
        return -1;
    }
    return 0;
}

function getCatagoryFoods(cat, data) {
    let result = []
    for (let i in data) {
        if (data[i].catagory === cat) {
            // console.log(data[i])
            result.push(data[i]);
        }
    }
    return result;
}

export async function getStaticProps(content) {
    const res = await fetch(process.env.API_ROUTE + '/foodItems')
    const data = await res.json()
    data.sort(comapare_name);
    data
    //   console.log(data);
    const appetizers = getCatagoryFoods("Appetizer", data);
    const entrees = getCatagoryFoods("Entree", data);
    const kfc = getCatagoryFoods("KFC", data);
    const combinations = getCatagoryFoods("Combinations", data)
    const teriyaki = getCatagoryFoods("Teriyaki", data)
    const specials = getCatagoryFoods("Specials", data)

    if (!data) {
        return {
            notfound: true,
        }
    }

    return {
        props: { data :
        {
            appetizers,
            kfc,
            entrees,
            teriyaki,
            combinations,
            specials,

        }}, //will be passed to the page
    }
}