import styled from "styled-components";

const Wrapper = styled.div`
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    `;

const Left = styled.div`
    color: red;
    flex: 1;
    display: flex;
    align-items: center;
    `;

const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: underline;
    `;

const Logo = styled.h1`
    font-weight: bold;
    font-style: italic;
    font-size: 4rem;
    `;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    `;

const MenuItem = styled.div`
    font-size: 18px;
    cursor: pointer;
    margin-left: 25px;
    `;

const DetailTitle = styled.h1`
    font-size: 50px;
    text-align: center;
    text-decoration: underline;
   
    `;

const DetailDetail = styled.p`
    font-size: 20px;
    text-align: justify;
    `;

const DetailPrice= styled.p`
    font-size: 40px;
    color: blue;
    font-style: oblique;
    text-align: right;
    `;

const DetailStock= styled.p`
    font-size: 20px;
    color: violet;
    font-style: oblique;
    text-align: right;
    `;

const ItemCountContainer= styled.div`
    font-size: 20px;
    color: violet;
    font-style: oblique;
    margin-top:200px;
    `;

export { Wrapper, Logo, MenuItem, Left, Center, Right, DetailTitle, DetailDetail, DetailPrice, DetailStock, ItemCountContainer };