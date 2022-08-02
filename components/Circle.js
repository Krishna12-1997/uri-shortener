import styled from "styled-components";
import {mediaQry} from "../utils/utils";

const CircleWrapper = styled.figure`
   border-radius:50%;
   display:inline-block;
   height:9rem;
   width:9rem;
   background-color:var(--color-primary-2);
   display:flex;
   align-items:center;
   justify-content:center;
   position:absolute;
   top:-4.5rem;
   left:3rem;
   ${mediaQry.lessThan("tablet-small")`
       left:calc((100% - 9rem) / 2);
   `}

`;
function Circle() {
	return (
		<CircleWrapper>
			<img src={`/images/icon-fully-customizable.svg`} alt="ICON"/>
		</CircleWrapper>
	)
}

export default Circle;