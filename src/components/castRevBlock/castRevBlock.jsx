import { NavLink } from 'react-router-dom';
import { AdditionalInformationWrap } from './castRevBlock.styled';

export default function AdditionalInformation() {
  return (
    <AdditionalInformationWrap>
      <h2>Additional information</h2>
      <NavLink to="cast">Cast</NavLink>
      <NavLink to="reviews">Reviews</NavLink>
    </AdditionalInformationWrap>
  );
}
