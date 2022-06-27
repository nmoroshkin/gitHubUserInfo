import React from 'react';

import cl from './MySearch.module.scss';

const MySearch = ({ value, handleChange, onSearch }) => {
    const handleSearch = (e) => {
        if (e.key !== 'Enter' || value === '') {
            return;
        }
        onSearch(value);
        handleChange('');
    };
    return (
        <div className={cl.search}>
            <svg
                className={cl.searchImg}
                baseProfile="tiny"
                height="32px"
                version="1.1"
                viewBox="0 0 32 32"
                width="32px"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="Guides__x26__Forms" />
                <g id="Icons">
                    <path d="M24,23.543l-4.356-4.356c0.875-1.168,1.399-2.614,1.399-4.186c0-3.866-3.134-7-7-7s-7,3.134-7,7s3.134,7,7,7   c1.572,0,3.018-0.525,4.186-1.399l4.356,4.356L24,23.543z M9.043,15c0-2.757,2.243-5,5-5c2.757,0,5,2.243,5,5c0,2.757-2.243,5-5,5   C11.286,20,9.043,17.757,9.043,15z" />
                </g>
            </svg>
            <input
                onChange={(e) => handleChange(e.target.value)}
                onKeyUp={handleSearch}
                value={value}
                type="text"
                placeholder="Укажите GitHub-аккаунт"
            />
            <button
                onClick={() => {
                    value && onSearch(value);
                }}
            >
                Найти
            </button>
        </div>
    );
};

export default MySearch;
