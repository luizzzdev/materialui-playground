import React, { useState } from 'react';
import BaseAutoComplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { CircularProgress } from '@material-ui/core';

function AutoComplete({ options, onChange, onInput, loading, value }) {
  const renderInput = params => {
    const InputProps = {
      ...params.InputProps,
      endAdornment: (
        <React.Fragment>
          {loading ? <CircularProgress color="inherit" size={20} /> : null}
          {params.InputProps.endAdornment}
        </React.Fragment>
      ),
    };

    return (
      <TextField type="text" fullWidth {...params} InputProps={InputProps} />
    );
  };

  const [open, setOpen] = useState(false);

  const setOpenToTrue = () => setOpen(true);
  const setOpenToFalse = () => setOpen(false);

  return (
    <BaseAutoComplete
      onOpen={setOpenToTrue}
      onClose={setOpenToFalse}
      open={open}
      options={options}
      getOptionLabel={option => option}
      renderInput={renderInput}
      onChange={onChange}
      onInputChange={onInput}
      value={value}
      disableClearable
    />
  );
}

export default AutoComplete;
