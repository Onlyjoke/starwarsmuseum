import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

import css from './Characters.styl';
import Search from '../Search/Search';

const Characters = (props) => {
    const {
        characters,
        searchInput,
        handleChange,
        loadMoreCharacters
    } = props;

    if (characters === undefined || (Array.isArray(characters) && characters.length === 0)) {
        return (
            <div className={css.root}>
                <Search
                    searchInput={searchInput}
                    handleChange={handleChange}
                />
                <div>
                    Character not found...
                </div>
            </div>
        );
    }

    return (
        <div className={css.root}>
            <Search
                searchInput={searchInput}
                handleChange={handleChange}
            />
            <InfiniteScroll
                next={loadMoreCharacters}
                dataLength={characters.length}
                hasMore
                className={css.infiniteScroll}
                loader={<div>Loading...</div>}
            >
                {
                    characters.map((item) => {
                        const id = item.url.match(/\d+/g);

                        return (
                            <Link
                                to={`/character/${id}`}
                                className={css.name}
                                replace
                                key={shortid.generate()}
                            >
                                {item.name}
                            </Link>
                        );
                    })
                }
            </InfiniteScroll>
        </div>
    );
};

Characters.propTypes = {
    characters: PropTypes.array,
    searchInput: PropTypes.string,
    handleChange: PropTypes.func,
    loadMoreCharacters: PropTypes.func
};

export default Characters;
