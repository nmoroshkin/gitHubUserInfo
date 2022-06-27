import React from 'react';
import axios from 'axios';

import Info from './components/Info';
import MySearch from './components/MySearch/MySearch';

import './scss/style.scss';

function App() {
    const [user, setUser] = React.useState();
    const [value, setValue] = React.useState('');

    const searchUser = async (name) => {
        try {
            const { data } = await axios.get(`https://api.github.com/users/${name}`);
            const { starred_url } = data;
            const res = await axios.get(starred_url.replace('{/owner}{/repo}', ''));
            setUser({
                avatar: data.avatar_url,
                bio: data.bio,
                blog: data.blog,
                name: data.name,
                login: data.login,
                repos: data.public_repos,
                folowers: data.followers,
                starred: res.data.length,
                location: data.location,
            });
        } catch (error) {
            alert('SMth wrong');
        }
    };

    return (
        <>
            <MySearch handleChange={(text) => setValue(text)} onSearch={searchUser} value={value} />
            {user && <Info {...user} />}
        </>
    );
}

export default App;
