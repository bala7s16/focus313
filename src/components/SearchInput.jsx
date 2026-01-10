import { FaSearch } from 'react-icons/fa';
import '../styles/SearchInput.css';

const SearchInput = ({ value, onChange, placeholder = 'Search...' }) => {
    return (
        <div className="search-input-container">
            <FaSearch className="search-icon" />
            <input
                type="text"
                className="search-input"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
            />
        </div>
    );
};

export default SearchInput;
