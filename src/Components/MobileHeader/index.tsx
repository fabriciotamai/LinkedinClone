import React from 'react';

import { Container, SearchInput, ProfileCircle ,MessageIcon } from './styles';


const MobileHeader : React.FC = () => {

    return(
        <div>
            <Container>
                <ProfileCircle src="https://github.com/guilhermerodz.png"/>
                <SearchInput placeholder="Pesquisar"/>
                <MessageIcon/>
            

            </Container>
            


        </div>
    )
}

export default MobileHeader;