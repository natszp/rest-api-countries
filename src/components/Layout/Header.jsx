import Filter from './Filter';
import SearchInput from './SearchInput'
import classes from './Header.module.css'



const Header = ({ onChangeInput, onChangeFilter }) => {


    return (
        <div className={classes.header}>
            <SearchInput onChangeInput={onChangeInput}/>
            <Filter onChangeFilter={onChangeFilter} />
        </div>
    );
}

export default Header;