import React, { useContext} from "react";
import { Container, Box } from '@chakra-ui/react'
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { PokemonContext } from "../../Contexts/PokemonContext";
import DetailCard from "./DetailCard";


export default function Detail() {

    const context = useContext(PokemonContext)
    const {pokemons, pokemonDetail} = context

    const navigate = useNavigate()
    const excluir = () => { 

    }

    return(
        <>
            <Header/>
            <Container maxW='2xl' bg='gray' centerContent>
                <h1>Detalhes</h1>
               
                <DetailCard/>
            </Container>
            {/* <Container maxW='2xl' bg='#DDDDDD' centerContent>
                {pokemons.filter((pokemon)=>(
                <DetailCard 
                name={pokemon.data.name}
                imgFront={pokemon.data.sprites.front_default}
                imgBack={pokemon.data.sprites.back_default}

                />
                    
                ))}
                
                
            </Container> */}
        </>
    )
}