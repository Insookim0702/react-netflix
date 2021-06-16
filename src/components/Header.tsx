import React from 'react';
import Styled from 'styled-components';
import {
    BrowserRouter,
    Link,
    withRouter,
    RouteComponentProps,
} from 'react-router-dom';
// import { RouteComponentProps } from 'react-router';
import { JsxEmit } from 'typescript';

const HeaderBoxNav = Styled.ul`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 940px;
    width: 100%;
    height: 80px;
`;

const HeaderBox = Styled.header`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Item = Styled.li<{ current: boolean }>`
    font-size: 1.2em;
    /* &:hover {
        color: red;
        border-bottom: 4px solid red;
    } */
    border-bottom: 5px solid ${(props) =>
        props.current === true ? 'red' : 'transparent'}
`;
const RouterLink = Styled(Link)``;
interface location {
    pathname: string;
}
const Header = ({
    location: { pathname },
}: RouteComponentProps<location>): JSX.Element => {
    return (
        <HeaderBox>
            <HeaderBoxNav>
                <Item current={pathname === '/'}>
                    <RouterLink to="/">Logo</RouterLink>
                </Item>
                <Item current={pathname === '/Tvshow'}>
                    <Link to="/Tvshow">Tvshow</Link>
                </Item>
                <Item current={pathname === '/Detail'}>
                    <RouterLink to="/Detail">Detail</RouterLink>
                </Item>
                <Item current={pathname === '/Search'}>
                    <RouterLink to={'/Search'}>Search</RouterLink>
                </Item>
            </HeaderBoxNav>
        </HeaderBox>
    );
};
export default withRouter(Header);
