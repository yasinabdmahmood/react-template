import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import styles from './styles.module.css'

const occupations = ['Developer', 'Designer', 'Manager', 'Engineer', 'Teacher', 'Nurse', 'Doctor'];
const names = ['John', 'Jane', 'Steve', 'Sara', 'Mike', 'Lucy', 'David'];
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const languages = Array.from({ length: 100 }, (_, index) => ({
  name: names[randomInt(0, names.length - 1)],
  age: randomInt(18, 80),
  occupation: occupations[randomInt(0, occupations.length - 1)],
}));

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : languages.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
  <div className={styles['container']}>
    <span>{suggestion.name}</span>
    <br/>
    <span>{suggestion.occupation}</span>
  </div>
);

const Example = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: 'Type a programming language',
    value,
    onChange
  };

  return (
    <div className={styles['dev']}>
      <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
      theme={styles}
    />
    </div>
    
  );
};

export default Example;
