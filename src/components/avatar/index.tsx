import React from 'react';
import "./styles.css";
import { AvatarProps } from '../../types/avatar';

export default function Avatar ({ image }: AvatarProps)  {
    return (
        <div className="container">
            <img
                className="img" 
                alt=""
                src={image} 
            />
        </div>
    );
}