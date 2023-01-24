import React from 'react';
import styled from 'styled-components';
import Accused from "./Accused";



const Search = () => {
  const lawarray = Accused.keys;
  const [laws, setLaws] = React.useState("");
  const [keyword, setKeyword] = React.useState('');
  const [ipc, setIpc] = React.useState("");


  function handleChange(event) {

    setKeyword(event.target.value);

  }
  // complete *******************************************************


  function handleClick() {
    for (let i = 0; i < lawarray.length; i++) {
      if (keyword.toUpperCase() === lawarray[i].id.toUpperCase()) {
        setLaws(lawarray[i].description);
        setIpc(() => {
          return "According to " + lawarray[i].law
        });
        // console.log(lawarray[i].law);
        // console.log(laws)
        // setLaws(lawarray[i].description);
        // console.log(laws);
        // console.log(lawarray[i].description);
      }
    }
  }
  return (
    <Wrapper>
      <div>
        <input className='search-bar' type="text" placeholder='Search' onChange={handleChange} />

        <button className="sc-bcXHqe fwLrQG"
          id='search-button'
          onClick={handleClick}>Search</button>

      </div>
      <br />
      <br />
      <h2>Select your Section</h2>
      <div className='checkboxin'>
        <label className="containernew">Accussed
          <input type="checkbox" />
          <span className="checkmarknew"></span>
        </label>

        <label className="containernew">Victims
          <input type="checkbox" />
          <span className="checkmarknew"></span>
        </label>
      </div>
      <br /><br />
      <div id='resultid'>
           Result found 
      </div>
      <br />
      <br /><br /><br />
      <h2 id='art'>Article</h2>

      <div className="cardcontent"><b>{ipc}</b>
      </div>
      <br />

      <div className="cardcontentin">
        {laws}
      </div>
    </Wrapper>





  )
};
const Wrapper = styled.div``;


export default Search;