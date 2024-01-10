import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

function SearchInput({ handleChange }) {
  return (
    <Input
      inputProps={{ style: { color: 'white' } }}
      onChange={handleChange}
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon sx={{ color: 'white' }} />
        </InputAdornment>
      }
    />
  );
}
export default SearchInput;
