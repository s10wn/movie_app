import React from "react";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import { Movie } from "../components/Movie";

const getMovies = gql`
    query {
        movies {
            id
            medium_cover_image
        }
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;
const Header = styled.header`
    background-image: linear-gradient(-45deg, #d754ab, #fd723a);
    height: 45vh;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
const Title = styled.h1`
    font-size: 60px;
    font-weight: 600;
    mix-blend-mode: 20px;
`;
const Subtitle = styled.h3`
    font-size: 35px;
`;
const Loading = styled.div`
    font-size: 18px;
    opacity: 0.5;
    font-weight: 500;
    mask-type: 10px;
`;

const Movies = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 25px;
    width: 60%;
    position: relative;
    top: -50px;
`;
export const Home = () => {
    const { loading, data } = useQuery(getMovies);

    return (
        <Container>
            <Header>
                <Title>Movie App</Title>
                <Subtitle>Base Films</Subtitle>
            </Header>
            {loading && <Loading>Loading...</Loading>}
            <Movies>
                {!loading &&
                    data.movies.map((val) => (
                        <Movie
                            key={val.id}
                            ids={val.id}
                            bg={val.medium_cover_image}
                        />
                    ))}
            </Movies>
        </Container>
    );
};
