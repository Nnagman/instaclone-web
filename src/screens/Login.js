import styled from "styled-components";
import {darkModeVar} from "../apollo";


const Title = styled.h1`
  color: ${(props) => props.theme.fontColor};
`;

const Container = styled.div``;

function Login({setIsLoggedIn}) {
    return (
        <Container>
            <Title>Login</Title>
        </Container>
    );
}

export default Login;