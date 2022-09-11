import './category.scss';
import {useState, useEffect} from 'react';
import cup from '../../resources/img/goldCup.png'

const Categoty = (props) => {



    const {bgImg, name, selectCategoty} = props


    // console.log(selectCategoty); 

    return(
        <div onClick={() => selectCategoty(name)} 
            className = {name + ' category__item'}  
            style={{
            'backgroundImage' : `url(${bgImg})`
        }}>
            <div className={name + '__info category__item-info'}>
                <p>{name}</p>
            </div>
            <div className='rate__wrapper'>
            <div className='rate__top'>
                <div className='pedestal'>
                    <div className='pedestal__second pedestal__item'>
                        <p className='pedestal__second-name pedestal__text'>Дюна</p>
                        <div className='pedestal__second-height height'>
                            
                        </div>
                    </div>
                    <div className='pedestal__first pedestal__item'>
                        <p className='pedestal__first-name pedestal__text'>Дюна</p>
                        <div className='pedestal__first-height height'>
                            <img alt="cup" src = {cup}></img>
                        </div>
                    </div>
                    <div className='pedestal__third pedestal__item'>
                        <p className='pedestal__third-name pedestal__text'>Дюна</p>
                        <div className='pedestal__third-height height'></div>
                    </div>
                </div>
            </div>

            <div className = 'rate__list'>
                <ul>
                    <li className='rate__list-first'>
                        <p >Дюна</p>
                        <p className='rate__list-first-score'>85</p>
                    </li>
                    <li className='rate__list-second'>
                        <p >Дюна</p>
                        <p className='rate__list-second-score'>85</p>
                    </li>
                    <li className='rate__list-third'>
                        <p >Дюна</p>
                        <p className='rate__list-third-score'>85</p>
                    </li>
                </ul>
            </div>
            </div>
            
        </div>
    )
}

export default Categoty
