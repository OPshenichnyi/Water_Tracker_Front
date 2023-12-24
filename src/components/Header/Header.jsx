
import { Wrapper} from './Header.styled';
import { Logo} from '../Logo/Logo';
import { UserAuth } from '../UserAuth/UserAuth';
import UserLogo from '../UserLogo/UserLogo';
export const Header = () => {


// const { isLoggedIn } = useAuth();

    return (
     <div className="container main-container">
        <Wrapper>
            <Logo />
                <UserAuth />
                <UserLogo/>

        </Wrapper>
   </div>
)

}

