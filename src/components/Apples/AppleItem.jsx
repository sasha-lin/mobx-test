import React from 'react';
import './styles/appleItem.scss';
import { observer } from "mobx-react-lite"
import { useRootStore } from "../../store"


function AppleItem(props){
    const { appleStore } = useRootStore()
    const { eatApple } = appleStore
    const {apple} = props
    return (
        <div className="appleItem">
            <div className="apple"><img src={require('../../images/apple.png').default} alt=""/></div>
            <div className="info">
                <div className="name">红苹果 - { apple.id }号</div>
                <div className="weight">{ apple.weight }克</div>
            </div>
            <div className="btn-div">
                <button onClick={()=>eatApple(apple.id)}> 吃掉 </button>
            </div>
        </div>
    );
}


export default observer(AppleItem)
