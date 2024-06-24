import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import { useId } from 'react';

export function SearchField(props: {
  value: string,
  label?: string,
  onChange: (s: string) => void,
  onClear: () => void
}) {
  const inputID = useId();
  return (
    <Box sx={{display: 'flex', alignItems: 'center'}}>
      <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      <FormControl sx={{width: '80%'}}>
        <InputLabel htmlFor={inputID}>{props.label}</InputLabel>
        <Input
          id={inputID}
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
          endAdornment={
            <InputAdornment
              position="end"
            >
              <IconButton
                aria-label="clear search field"
                onClick={() => props.onClear()}
              >
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  )
}