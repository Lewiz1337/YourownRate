import {useState, useEffect} from 'react';


import Categoty from "../category/Categoty";


import './categories.scss'; 


import FilmsImg from '../../resources/img/FilmsBg.jpg'
import GamesImg from '../../resources/img/gamesBg.jpg'
import BooksImg from '../../resources/img/BooksBg.jpg'
import MusicImg from '../../resources/img/MusicBg.jpg'
import React from "react";



const categories = [
    { name:'Films', img : FilmsImg},
    { name:'Games', img : GamesImg},
    { name:'Books', img : BooksImg},
    { name:'Music', img : MusicImg}
]


const Categories = () => {
    const [categorySelected, setCategorySelected] = useState('Films')
    



    const selectCategoty = (name) => {
        setCategorySelected(() => name)
    }

    useEffect(() => {
        selectCategoty(categorySelected)
        console.log(categorySelected);
    }, [categorySelected])

    const content = categorySelected === null ? null : <View selectCategoty = {selectCategoty} selected = {categorySelected}/> 
    

    return(
        <section id="categories">
            {/* <Categoty selectCategoty = {selectCategoty} name = 'Films' bgImg = {FilmsImg}/>
            <Categoty selectCategoty = {selectCategoty} name = 'Games' bgImg = {GamesImg}/>
            <Categoty selectCategoty = {selectCategoty} name = 'Books' bgImg = {BooksImg}/>
            <Categoty selectCategoty = {selectCategoty} name = 'Music' bgImg = {MusicImg}/>
             */}
            {content}
        </section>
    )
}

const View = (props) => {
    const {selectCategoty, selected} = props;

        let category;
        if(selected === 'All'){
            category = categories.map(item => {
                // if(item.name === selected || selected === null){
                    return(
                        <>
                            <Categoty 
                                selectCategoty = {selectCategoty} 
                                name = {item.name}
                                bgImg = {item.img}/>
                        </>
                    )
                // }
    
            })
        } else {
            category = categories.map(item => {
                if(item.name === selected){
                    return(
                        <>
                            <Categoty 
                                selectCategoty = {selectCategoty} 
                                name = {item.name}
                                bgImg = {item.img}/>
                            
                        </>
                    )
                }
    
            })
        }

    

    return(
        <>
            {category}
        </>
    )
}



export default Categories;