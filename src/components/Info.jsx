import React from 'react';

const Info = ({ avatar, bio, blog, name, login, repos, folowers, starred, location }) => {
    return (
        <div className="user">
            <div className="about">
                <div className="avatar">
                    <img src={avatar} alt="" />
                </div>
                <div className="info">
                    <h2 className="name">{name}</h2>
                    <p className="login">@{login}</p>
                    {bio && <p className="description">{bio}</p>}
                </div>
            </div>
            <div className="information">
                <div className="information__item">
                    <p>Репозитории</p>
                    <span>{repos}</span>
                </div>
                <div className="information__item">
                    <p>Подписчиков</p>
                    <span>{folowers}</span>
                </div>
                <div className="information__item">
                    <p>Звёзд</p>
                    <span>{starred}</span>
                </div>
            </div>
            <div className="footer">
                {location && <p className="location">{location}</p>}
                {blog && <a href="#">{blog}</a>}
            </div>
        </div>
    );
};

export default Info;
