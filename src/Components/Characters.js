import {React, useState, useEffect} from 'react';
import axios from 'axios';
import {Button, Card, CardGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Characters() {
    const [characterList, updateCharacterList] = useState([]);
    async function fetchTheData(){
        const theData = await axios.get('https://rickandmortyapi.com/api/character');
        // console.log(theData.data.results);
        updateCharacterList(theData.data.results)
    }

    useEffect(()=>{
        fetchTheData();
    }, [])

    function renderCardFunction(){
        // console.log(characterList);
        return characterList.map((iter)=>{
            return (
                <Card className="mx-2 my-2" style={{ minWidth: '15rem' }} key={iter.id}>
                    <Card.Img variant="top" src={iter.image} />
                    <Card.Body>
                        <Card.Title>{iter.name}</Card.Title>
                        <Card.Text>
                        <strong>From :</strong> {iter.location.name}
                        </Card.Text>
                        <Card.Text>
                        <strong>Last known location :</strong><br/>{iter.origin.name}
                        </Card.Text>
                        <Link to={`/character/${iter.id}`}>
                            <Button variant="dark" size="sm">Learn More</Button>
                        </Link>
                    </Card.Body>
                </Card>
            )
        })
    }

    return (
        <div>
            <div className="container mt-4">
                <CardGroup>
                    {renderCardFunction()}
                </CardGroup>
            </div>
        </div>
    )
}
