import styled from 'styled-components';
export const AdditionalInformationWrap = styled.div`
  padding: 20px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  background-color: #9f79ee;
  & > h2 {
    margin: 0;
    font-size: 35px;
  }
  & > a {
    color: black;
    font-size: 25px;
    margin: 10px;
    text-decoration: none;
  }
  & > a.active {
    color: white;
  }
`;
