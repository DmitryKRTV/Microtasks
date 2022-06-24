import React from 'react';

export type HeaderType = {
    title: string
}

const Header = (props: HeaderType) => {
    return (
        <div>
            {props.title}
        </div>
    );
};

export default Header;
