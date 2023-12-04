import React, { Component } from 'react';
const Routing = () =>{ 
        return (
            <ul>
                <li>
                    <a href="/home">Home</a>
                </li>
                <li>
                    <a href="/product">Product</a>
                </li>
                <li>
                    <a href="/posts">post</a>
                </li>
                <li>
                    <a href="/admin">Admin</a>
                </li>
                <li>
                    <a href="/products/:id">All Products</a>
                </li>
            </ul>
        );
    }

 
export default Routing;