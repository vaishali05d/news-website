import React, { useEffect, useState, useCallback } from 'react';
import Card from './Card';

const NewsApp = () => {
    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState(null);
    const API_KEY = "38d7b78ca16c4ada91b599dd6a4af2dd";

    const getData = useCallback(async () => {
        try {
            const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
            const jsonData = await response.json();
            console.log(jsonData.articles);
            setNewsData(jsonData.articles);
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    }, [search]);

    useEffect(() => {
        getData();
    }, [getData]);

    const handleInput = (e) => {
        setSearch(e.target.value);
    };

    const userInput = (event) => {
        setSearch(event.target.value);
    };

    return (
        <div>
            <nav>
                <div>
                    <h1>Trendy News</h1>
                </div>
                <ul style={{ display: "flex", gap: "11px" }}>
                    <button
                        style={{ fontWeight: 600, fontSize: "17px", background: "none", border: "none", cursor: "pointer" }}
                    >
                        All News
                    </button>
                    <button
                        style={{ fontWeight: 600, fontSize: "17px", background: "none", border: "none", cursor: "pointer" }}
                    >
                        Trending
                    </button>
                </ul>
                <div className="searchBar">
                    <input
                        type="text"
                        placeholder="Search News"
                        value={search}
                        onChange={handleInput}
                    />
                    <button onClick={getData}>Search</button>
                </div>
            </nav>
            <div>
                <p className="head">Stay Update with TrendyNews</p>
            </div>
            <div className="categoryBtn">
                <button onClick={userInput} value="sports">Sports</button>
                <button onClick={userInput} value="politics">Politics</button>
                <button onClick={userInput} value="entertainment">Entertainment</button>
                <button onClick={userInput} value="health">Health</button>
                <button onClick={userInput} value="fitness">Fitness</button>
            </div>
            <div>{newsData ? <Card data={newsData} /> : null}</div>
        </div>
    );
};

export default NewsApp;
