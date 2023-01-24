/* like index.css */
/* over index.css we can not add js */
/* access theme data  */
import { createGlobalStyle } from "styled-components";

export const GlobalStyle= createGlobalStyle`

*{

    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Work Sans',sans-serif;
}
#art{
  margin-left:68px;

}
#restate-button{
  margin-left:700px;
}

.cardcontentin{
  border:4px double black;
  padding:10px;
  font-size:3rem;
  margin-top:3px;

}
#resultid{
  // magin-top:100px;
  font-size:5rem;
  margin-left:630px;
}
.cardcontent{
  margin-left:300px;
  font-size:4rem;
  margin-top:50px;

}

html{
    font-size:62.5%;
    overflow-x:hidden;
}
h1{
    color:${({theme})=>theme.colors.heading};
    // passing the object theme from the function above
    font-size:6rem;
    font-weight:900;
}
h2{
    color:${({theme})=>theme.colors.heading};
    // passing the object theme from the function above
    font-size:6rem;
    font-weight:300;
    white-space:normal;
    text-align:center;
}
h3{
    // color:${({theme})=>theme.colors.heading};
    // passing the object theme from the function above
    font-size:1.8rem;
    font-weight:400;
}
p {
    
        color:${({theme})=>theme.colors.heading};
        // passing the object theme from the function above
        font-size:1.65rem;
        opacity:0.7;
        font-weight:400;
        line-height:1.5;
        margin-top:1rem;
}
a {
    text-decoration: none;

}

li {
    list-style: none;
}
.search-bar{
  // align:center;
  margin: auto;
  width: 50%;
  margin-top:100px;
  border-top-color:white;
  margin-left:500px;
  height:45px;
  
  padding: 10px;
}
#search-button{
  margin-left:50px;
}
.containernew {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkboxnew */
.containernew input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkboxnew */
.checkmarknew {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.containernew:hover input ~ .checkmarknew {
  background-color: #ccc;
}
.checkboxin{
  margin-top:50px;
  margin-left:700px;
}


/* When the checkboxnew is checked, add a blue background */
.containernew input:checked ~ .checkmarknew {
  background-color: #2196F3;
}

/* Create the checkmarknew/indicator (hidden when not checked) */
.checkmarknew:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmarknew when checked */
.containernew input:checked ~ .checkmarknew:after {
  display: block;
}

/* Style the checkmarknew/indicator */
.containernew .checkmarknew:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.container {
    max-width: 120rem;
    margin: 0 auto;
  }
  .grid {
    display: grid;
    gap: 9rem;
  }
  .grid-two-column {
    grid-template-columns: repeat(2, 1fr);
  }
  .grid-three-column {
    grid-template-columns: repeat(3, 1fr);
  }
  .grid-four-column{
     grid-template-columns: 1fr 1.2fr .5fr .8fr ;
  }
  .common-heading {
    font-size: 3.8rem;
    font-weight: 600;
    margin-bottom: 6rem;
    text-transform: capitalize;
  }
  input, textarea{
    max-width: 50rem;
    color: ${({ theme }) => theme.colors.black};
    padding: 1.6rem 2.4rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    text-transform: uppercase;
   box-shadow: ${({ theme }) => theme.colors.shadowSupport};
}
    input[type="submit"]{
    max-width: 16rem;
    margin-top: 2rem;
    background-color: ${({ theme }) => theme.colors.btn};
    color: ${({ theme }) => theme.colors.white};
    padding: 1.4rem 2.2rem;
    border-style: solid;
    border-width: .1rem;
    text-transform: uppercase;
    font-size: 1.8rem;
    cursor: pointer;
    }

`;