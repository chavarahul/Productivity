import React from 'react';

// Define NewsComponent
const NewsComponent: React.FC<{ newsData: any[] }> = ({ newsData }) => {
    return (
        <div>
            <h1>Latest News</h1>
            <ul>
                {newsData.map((newsItem: any) => (
                    <li key={newsItem.id}>
                        <h3>{newsItem.title}</h3>
                        <p>{newsItem.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// Implement getServerSideProps
export async function getServerSideProps() {
    const apiKey = 'cf7ec53d-b986-4f3b-8ac0-7ddfae9284d8';
    const title = 'News';
    const apiUrl = `http://api.goperigon.com/v1/all?apiKey=${apiKey}&title=${title}`;
    
    const res = await fetch(apiUrl);
    const data = await res.json();

    return {
        props: {
            newsData: data
        }
    };
}

// Export NewsComponent
export default NewsComponent;
