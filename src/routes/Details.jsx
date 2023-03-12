import { gql, useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const GET_MOVIE = gql`
    query getMovie($id: Int!) {
        movie(id: $id) {
            rating
            language
            title
            medium_cover_image
            description_intro
        }
    }
`;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(-45deg, #d754ab, #fd723a);
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
`;

const Column = styled.div`
    margin-left: 10px;
    width: 50%;
`;

const Poster = styled.div`
    width: 25%;
    height: 60%;
    background-color: transparent;
`;

const Title = styled.h1`
    font-size: 65px;
    margin-bottom: 15px;
`;
const Subtitle = styled.h4`
    font-size: 35px;
    margin-bottom: 10px;
`;
const Description = styled.p`
    font-size: 28px;
`;

export const Details = () => {
    const { id } = useParams();
    const { loading, data } = useQuery(GET_MOVIE, {
        variables: { id: Number(id) },
    });
    console.log(parseInt(id));
    if (loading) {
        return <h1>Loading ...</h1>;
    }
    const date = data?.movie;
    return (
        <Container>
            <Column>
                <Title>{date?.title}</Title>
                <Subtitle>
                    {date?.language} · {date?.rating}
                </Subtitle>
                <Description>{date?.description_intro}</Description>
            </Column>
            <Poster>
                <img src={date?.medium_cover_image} alt='' />
            </Poster>
        </Container>
    );
};

// Array.prototype.CustomMap = function (callback, context) {
//     var result = [];
//     for (var i = 0; i < this.length; i++) {

//         result.push(callback.call(context, this[i], i, this));
//     }
//     return result;
// };

// var numbers = [1, 2, 3];
// var squares = numbers.CustomMap(function (x) {
//     return x * x;
// });
// console.log(squares); // [1, 4, 9]

// /* Для реализации метода CustomMap в прототипе Array нужно создать новую функцию и добавить ее в свойство Array.prototype. Эта функция будет принимать в качестве аргументов функцию обратного вызова и, при необходимости, объект контекста, на который будет ссылаться this внутри функции обратного вызова.

// Функция CustomMap должна работать так же, как и метод map, который уже определен в прототипе Array. Она должна применять функцию обратного вызова ко всем элементам массива, начиная с индекса 0 и заканчивая индексом, равным length - 1. Результаты вызовов функции обратного вызова должны сохраняться в новом массиве, который будет возвращаться в качестве результата.

// Вот как может выглядеть реализация метода CustomMap:

// javascript
// Copy code
// Array.prototype.CustomMap = function(callback, context) {
//   var result = [];
//   for (var i = 0; i < this.length; i++) {
//     result.push(callback.call(context, this[i], i, this));
//   }
//   return result;
// };
// Эта реализация создает новый пустой массив result, затем перебирает все элементы исходного массива, вызывая функцию обратного вызова callback для каждого элемента. Результат каждого вызова добавляется в result. Функция обратного вызова вызывается с тремя аргументами: текущим элементом массива, его индексом и исходным массивом.

// Пример использования:

// javascript
// Copy code
// var numbers = [1, 2, 3];
// var squares = numbers.CustomMap(function(x) {
//   return x * x;
// });
// console.log(squares); // [1, 4, 9]
// В этом примере CustomMap вызывается для массива numbers, передавая ему функцию, которая возводит каждый элемент в квадрат. Результат сохраняется в новом массиве squares, который затем выводится в консоль.

// /**
//   Задачи:

//   1) Реализовать метод customMap в прототипе Array,
//      который является точной копией метода map.

//   2) Реализовать метод customFilter в прототипе Array,
//      который является точной копией метода filter.

// */

// // Array.prototype.customMap = function(callback) {
// //     const result = [];

// //     for (index = 0; index < this.length; index++) {
// //       result[index] = callback(this[index], index, this);
// //     }

// //     return result;
// //   };

// //   const numbers = [1, 2, 3,2,5,6, 25, 254];

// //   console.log(numbers.customMap((number) => {
// //       return number * number;
// //   }));

// //   Array.prototype.customFilter = function(callback) {
// //     const filteredArray = [];

// //     for(index = 0; index < this.length; index++) {
// //       const isFiltered = callback(this[index], index, this);

// //       if(isFiltered) {
// //         filteredArray.push(this[index]);
// //       }
// //     }

// //     return filteredArray;
// //   }

// //   console.log(numbers.customFilter((number) => {
// //       return number > 25;
// //   }));

// import React, { useEffect } from "react";

// export const Details = () => {
//     useEffect(() => {
//     }, []);
//     return <div>Details</div>;
// };
