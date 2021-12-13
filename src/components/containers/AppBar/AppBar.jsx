import { useEffect, useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { Auth, Hub } from 'aws-amplify';
import styled from 'styled-components';

import { ReactComponent as Logo } from './logo.svg';
import { MaxWidth } from '..';
import Cart from '../../Cart';

const AppBar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState();
  const history = useHistory();
  useEffect(() => {
    Hub.listen('auth', (data) => {
      switch (data.payload.event) {
        case 'signIn':
          setIsAuthenticated(true);
          break;
        case 'signOut':
          setIsAuthenticated(false);
          break;
        default:
          break;
      }
    });
    Auth.currentAuthenticatedUser()
      .then(() => setIsAuthenticated(true))
      .catch(() => setIsAuthenticated(false));

    return () => {
      Hub.remove('auth');
    };
  }, []);

  const signOut = () => {
    Auth.signOut();
    history.push('/');
  };
  return (
    <Container>
      <MaxWidth>
        <Nav>
          <Link to="/">
            <Logo />
          </Link>
          <div>
            <Action>
              <Cart />
              {isAuthenticated ? (
                <FiLogOut
                  onClick={signOut}
                  style={{
                    marginLeft: '20px',
                    cursor: 'pointer',
                  }}
                />
              ) : null}
            </Action>
          </div>
        </Nav>
      </MaxWidth>
    </Container>
  );
};

const Container = styled.header`
  background-color: ${({ theme }) => theme.app.appBar.background};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0.813rem;

  & svg {
    width: 2rem;
    height: 2rem;
  }
`;

const Action = styled.div`
  & svg {
    width: 1.563rem;
    height: 1.563rem;
  }
`;

export default AppBar;
