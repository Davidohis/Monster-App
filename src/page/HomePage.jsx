import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Monster from "../monster-app/monster";

export default function HomePage() {
    return (
        <>
            <header class="header">
                <div class="text-box">
                    <h1 class="heading-primary">
                        <span class="heading-primary-main">Unlimited movies, TV shows, and more.</span>
                        <span class="heading-primary-sub">Watch anywhere. Cancel anytime.</span>
                    </h1>
                    <Link to="/movies" class="btn btn-white btn-animated">Discover more</Link>
                </div>
            </header>
            <Monster />
        </>
    )
}
