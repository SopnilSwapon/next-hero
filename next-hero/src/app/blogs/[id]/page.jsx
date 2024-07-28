import React from 'react';

const DetailsPage = ({params}) => {
     const singleBlog = blogs.find(blog => blog.id == params.id);
    return (
        <div className='bg-gray-500 py-10'>
            <h2 className="font-bold text-3xl mt-5 text-center">{singleBlog.title}</h2>
            <p className='text-center'>{singleBlog.description}</p>
        </div>
    );
};

const blogs = [
    {
        "id": 1,
        "title": "Exploring the Mountains",
        "description": "An adventurous journey through the rugged mountains and serene landscapes."
    },
    {
        "id": 2,
        "title": "Culinary Delights",
        "description": "Discovering the world of gourmet food and unique culinary experiences."
    },
    {
        "id": 3,
        "title": "Tech Innovations",
        "description": "Latest advancements in technology and how they are shaping our future."
    },
    {
        "id": 4,
        "title": "Mindfulness and Meditation",
        "description": "The benefits of mindfulness and meditation for a healthier lifestyle."
    },
    {
        "id": 5,
        "title": "Travel on a Budget",
        "description": "Tips and tricks for traveling the world without breaking the bank."
    },
    {
        "id": 6,
        "title": "Urban Gardening",
        "description": "How to create a lush garden in small urban spaces."
    },
    {
        "id": 7,
        "title": "Sustainable Living",
        "description": "Practical steps to adopt a more sustainable and eco-friendly lifestyle."
    },
    {
        "id": 8,
        "title": "Fitness Routines",
        "description": "Effective fitness routines to stay in shape and maintain good health."
    },
    {
        "id": 9,
        "title": "Art and Creativity",
        "description": "Exploring various forms of art and unleashing your creative potential."
    },
    {
        "id": 10,
        "title": "Historical Wonders",
        "description": "A look into the most fascinating historical sites around the world."
    }
]

export default DetailsPage;