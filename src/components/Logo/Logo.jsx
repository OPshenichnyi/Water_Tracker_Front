
import {StyledLink} from './Logo.styled';
import sprite from '../../common/symbol-defs.svg';

export const Logo = () => {

    return (
        <nav>
            
    <StyledLink  to="/">
   <svg width={102} height={48}>
            <use href={`${sprite}#Logo`} />
          </svg>
   </StyledLink >

    </nav>
   
)

}
