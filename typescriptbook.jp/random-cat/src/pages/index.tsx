import { useState } from "react";
import { NextPage } from "next";

interface CatCategory {
    id: number;
    name: string;
}

interface SearchCatImage {
    id: string;
    url: string;
    width: number;
    height: number;
}

type SearchCatImageResponse = SearchCatImage[];

const fetchCatImage = async (): Promise<SearchCatImage> => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const result = await res.json() as SearchCatImageResponse;
    return result[0];
};

interface IndexPageProps {
    initialCatImageUrl: string;
}

const IndexPage: NextPage<IndexPageProps> = ({ initialCatImageUrl }) => {
    const [catImageUrl, setCatImageUrl] = useState(initialCatImageUrl);

    const handleClick = async() => {
        const image = await fetchCatImage();
        setCatImageUrl(image.url);
    };

    return (
        <div>
            <button onClick={handleClick}>今日のにゃんこ🐱</button>
            <div style={{ marginTop: 8}}>
                <img src={catImageUrl} />
            </div>
        </div>
    );
};

export default IndexPage;
