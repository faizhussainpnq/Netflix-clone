# Entertainment App API Documentation

Welcome to the Entertainment App (Netflix Clone) API documentation. This API provides endpoints to access a wide range of movies, TV shows, trending content, user authentication, and user watchlists.

## Authentication

Authentication is required for certain endpoints to access user-specific features such as watchlists. The authentication process involves registering a new user, logging in.

## Endpoints

### Movies

Endpoints related to movies allow users to retrieve information about movies, fetch details of movies, obtain URLs and more.

- /Movies/414-3-76: Retrieve all movies based on page number.
- /movies/414-3-76:id: Retrieve details about a single movie based on its ID.
- /movies/414-3-76/urls/:id: Retrieve movie URLs based on their IDs.

### TV Shows

Endpoints related to TV shows provide functionality to fetch TV shows, get details of any show, and more.

- /TV_shows/121-35-8-79/tv: Retrieve all TV shows based on page number.
- /TV_shows/121-35-8-79/tv/:id: Retrieve details about a single TV show based on its ID.
- /tvshows/TV_shows/121-35-8-79/tv/urls/:id: Retrieve TV show URLs based on their IDs.

### Trending

The trending endpoints allow users to fetch trending movies and TV shows.

- /trending: Retrieve all trending movies and TV shows.

### User

Endpoints related to user management enable users to register, login, logout, and manage their watchlists.

- /user/signup: Register a new user.
- /user/login: Login as an existing user.
- /user/My-list/630-42-12: Get a user's watchlist.
- /user/My-list/630-42-12/:id: Remove movies or TV shows from a user's watchlist based on ID.

## Error Handling

The API returns appropriate HTTP status codes along with error messages in case of errors. Make sure to handle these errors in your application.

# Entertainment App Database Schema Documentation

## Overview

This document outlines the database schemas used in the Entertainment App for managing movies, TV shows, and user data.

## Schemas

### Movie Schema

Purpose: Defines the structure for storing movie data.
Collection: Movies

#### Required Fields:

- title: String
- genre: Array of Strings
- rating: Number
- posterUrl: String
- trailerUrl: String

### TV Show Schema

Purpose: Defines the structure for storing TV show data.
Collection: TV Shows

#### Required Fields:

- title: String
- rating: Number
- genres: Array of Strings
- bannerUrl: String
- posterUrl: String

### User Schema

Purpose: Manages user authentication and stores user-specific data.
Collection: Users

#### Fields:

- email: String (required)
- password: String (required)
- watchlist: Array of ObjectIds (references Movies and TV Shows)

#### Features:

- timestamps: Automatically manages creation and update timestamps.

## Relationships

- User to Movies/TV Shows: A user can have multiple movies and TV shows in their watchlist, representing a one-to-many relationship.

## Model Creation

Function: mongoose.model() is used to create models based on the defined userSchemas and user which interact with the database.