import axios from 'axios';
import {React, useState, useEffect} from 'react';
// import { Card } from 'react-bootstrap';

export default function ShowCharacter(props) {
    const [details, updateDetails] = useState(null);

    async function getTheData(){
        const theData = await axios.get(`https://rickandmortyapi.com/api/character/${props.match.params.charId}`);
        updateDetails(theData.data);
    }
    useEffect(()=>{
        getTheData();
    }, []);
    
    function renderThem(){
        if(details !== null){
            return renderCard();
        }
    }

    function renderCard(){

        function renderType(){
            if(details.type !== ''){
                return (
                    <div className="details-table">
                                <div className="heading">
                                    Type
                                </div>
                                <div className="detail">
                                    {details.type}
                                </div>
                    </div>
                )
            }
        }

        return (
            <div className="container">
                <h1 className="mt-3">{details.name}</h1>
                <div className="splitter">
                    <div className="left">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut atque odio error expedita laboriosam, voluptate ex? Deleniti accusantium possimus maxime ipsam natus vitae hic enim omnis, nesciunt tenetur libero! Distinctio, accusantium labore assumenda omnis ab optio nihil perferendis placeat, beatae harum ut error deleniti amet animi delectus culpa quibusdam reprehenderit ad laboriosam dolor consequatur? Atque eos architecto cumque non, debitis magnam molestias rerum quia quidem pariatur dolor odio a corrupti minus sunt nemo voluptate fugit enim mollitia laboriosam? Odio, molestiae!</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus tempora qui quo saepe? Sed quis esse quas reiciendis molestias, totam animi rerum sint quae hic praesentium deleniti porro excepturi! Ab optio id excepturi molestias. Voluptate modi unde nisi. Voluptates tempore natus velit omnis doloribus fugit voluptatem repellat eius laboriosam mollitia.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatum dolores consequatur eius accusantium reiciendis blanditiis quo aut? Ratione exercitationem temporibus veniam ullam autem sed rerum qui repudiandae optio sequi ipsa praesentium nam in similique est natus, eos asperiores aperiam perspiciatis maiores, aliquid saepe earum? Quidem corrupti explicabo ab corporis accusantium perspiciatis voluptatum modi cum libero quaerat, optio, laborum eveniet!</p>
                    </div>
                    <div className="right">
                        <div>
                            <img src={details.image} alt={`${details.name}'s`} />
                        </div>
                        <div className="name">
                            <h5>{details.name}</h5>
                        </div>
                        <div className="details-table">
                            <div className="heading">
                                Gender
                            </div>
                            <div className="detail">
                                {details.gender}
                            </div>
                        </div>
                        <div className="details-table">
                            <div className="heading">
                                Status
                            </div>
                            <div className="detail">
                                {details.status}
                            </div>
                        </div>
                        <div className="details-table">
                            <div className="heading">
                                Species
                            </div>
                            <div className="detail">
                                {details.species}
                            </div>
                        </div>
                        {renderType()}
                        <div className="details-table">
                            <div className="heading">
                                Last known Location
                            </div>
                            <div className="detail">
                                {details.location.name}
                            </div>
                        </div>
                        <div className="details-table">
                            <div className="heading">
                                Origin
                            </div>
                            <div className="detail">
                                {details.origin.name}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            {renderThem()}
        </div>
    )
}
