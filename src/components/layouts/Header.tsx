import styled from 'styled-components';


const HeaderContainer = styled.header`
    background: #FEFDFD;
    box-shadow: 0px 4px 2px 0px rgba(0, 0, 0, 0.04);
    color: white;
    display: flex;
    padding: 0rem 16.5rem; 

    @media (max-width: 1200px) {
    padding: 0rem 7%; 
}
`;

const StyledLink = styled.a`
    color: #676767;
    font-family: 'Pretendard-Medium';
    text-decoration: none;
    padding-bottom: 16px;
    padding-top: 85px;
    margin-left: 69px;
    position: relative;

    &:hover {
        color: #708FFE;
        &:after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2.5px;
            background-color: #708FFE;
            bottom: 0; 
            left: 0;
        }
    }
`;


const Header : React.FC = () => {
    return (
        <HeaderContainer>
            <StyledLink href="#">홈</StyledLink>
            <StyledLink href="#">주식사전</StyledLink>
            <StyledLink href="#">업종별시세</StyledLink>
            <StyledLink href="#">마이페이지</StyledLink>

        </HeaderContainer>
    );
};

export default Header;