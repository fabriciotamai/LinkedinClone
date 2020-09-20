import React from 'react';

import { 
    Container,
    Wrapper,    
    LinkedinIcon,        
    SearchInput,     
    HomeIcon,        
    NotificationsIcon,      
    ProfileCircle,       
    CaretDownIcon,
    

} from './styles';
 

const DesktopHeader : React.FC = () => {

    return(
        <div>
            <Container>
                <Wrapper>
                    <div className="left">
                        <LinkedinIcon/>
                        <SearchInput placeholder="Pesquisar"/>
                    </div>

                    <div className="right">

                        <nav>
                            <button className="active">
                                <HomeIcon/>
                                <span>Início</span>
                            </button>
                            <button >
                                <NotificationsIcon/>
                                <span>Noticações</span>
                            </button>
                            <button>
                                <ProfileCircle src="https://github.com/guilhermerodz.png"/>  
                                <span>Eu
                                    <CaretDownIcon/>
                                    </span>                         
                            </button>

                        </nav>
                    </div>


                </Wrapper>

            </Container>

        </div>


    )
}

export default DesktopHeader;