import React from 'react';
import { observer } from "mobx-react-lite"
import { useRootStore } from "../../store"
import AppleItem from './AppleItem';
import './styles/appleBasket.scss';

function AppleBusket(){
    let { appleStore } = useRootStore()
    let { apples, eatApple, status, isPicking, buttonText, pickApple } = appleStore
    let {
        appleNow: {quantity:notEatenQuantity,weight:notEatenWeight},
        appleEaten: {quantity:EatenQuantity,weight:EatenWeight}
    } = status;
    let getData=()=>{
        let data = [];
        apples.forEach(apple => {
            if (!apple.isEaten) {
                data.push( <AppleItem apple={apple} eatApple={eatApple} key={apple.id}/> )
            }
        });

        if(!data.length) data.push(<div className="empty-tip" key="empty">苹果篮子空空如也</div>);
        return data
    }

    return (
        <div className="appleBusket">
            <div className="title">苹果篮子</div>

            <div className="stats">
                <div className="section">
                    <div className="head">当前</div>
                    <div className="content">{notEatenQuantity}个苹果，{notEatenWeight}克
                    </div>
                </div>
                <div className="section">
                    <div className="head">已吃掉</div>
                    <div className="content">{EatenQuantity}个苹果，{EatenWeight}克</div>
                </div>
            </div>

            <div className="appleList">
                { getData() }
            </div>

            <div className="btn-div">
                <button  className={isPicking ? 'disabled' : ''}  onClick={() => pickApple() } >{buttonText}</button>
            </div>
        </div>
    );
}



export default observer(AppleBusket)
