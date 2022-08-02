import styled, { css } from "styled-components";
import Button from "./Button";
import { mediaQry } from "../utils/utils";
import { motion } from "framer-motion";

const HeaderWrapper = styled.header`
      padding:4rem 10rem;
      display:flex;
    @media only screen and (min-width:1500px){
        height:auto;
    }
     ${'' /* > *:first-child {
    	 margin-bottom:15rem; *
    	 ${mediaQry.lessThan("phone")`
            margin-bottom:40rem; 
           display : flex;
           flex-direction: space-between;
       `}
    }  */}

    ${mediaQry.lessThan("tablet")`
        padding:4rem 6rem;
    `}
    ${mediaQry.lessThan("tablet-small")`
        height:auto;
    `}
     ${mediaQry.lessThan("phone")`
        padding:4rem 2rem;
    `}
`;
const NavWrapper = styled.nav`
     display:flex;
     justify-content:space-between;
     align-items:center;
     height:100%;
`;
const NavLeft = styled.div`
      display:flex;
      > *:not(last-child) {
      	margin-right:3rem;
      }
      ul {
      	display:flex;
      	list-style:none;
      	li {
      	:not(last-child){
      		margin-right:1.5rem;
      	}
        :hover{
              color: var(--color-quinary);
          }

      	}
      	${mediaQry.lessThan("tablet-small")`
      	    display:none;
      	`}
      }
`;
const HeroWrapper = styled(motion.div)`
  padding:4rem 10rem;
     ${'' /* height:80vh;  */}
    display:flex;
     ${'' /* flex-direction: column; */}
    align-items: center;
       flex-direction: column; 
      ${mediaQry.lessThan("phone")`
         align-items:center;
         text-align:center;
         a {
         	align-self:center;
         }
      `}
      h1 {  
      	font-size:10rem;
        ${'' /* margin-top: 10rem; */}
      	font-weight:700;
      	line-height:1.1;
      	color:var(--color-tertiary);
      	${mediaQry.lessThan("tablet-small")`
      	    font-size: 4rem;
      	`}
      }
      p {
      	width:40%;
      	font-size:1.8rem;
      	color:var(--color-text);
      	 ${mediaQry.lessThan("phone")`
                 width:100%;
            `}
      }
      > *:not(:last-child) {
      	margin-bottom:2rem;
      }
      img{
        height: 40rem;
        ${mediaQry.lessThan("phone")`
                 width:100%;
                 height: 20rem;
            `}
      }
`;
const fixing = css`
    display:inline-block;
    width:30px;
    height:4px;
    border-radius:5px;
    background-color:var(--color-text);
`;
const MobileNav = styled.div`
    position:relative;
    ${fixing}
    ::after,::before {
    	${fixing}
    	content:"";
      position:absolute;
      left:0;
    }
    ::after {
      top:1rem;
    }
    ::before {
      top:-1rem;
    }
    display:none;
    ${mediaQry.lessThan("tablet-small")`
       display:inline-block;
       margin-left: 43rem;

    `}
    ${mediaQry.lessThan("phone")`
       display:inline-block;
       margin-left: 18rem;

    `}
`;
const container = {
    hidden: {

    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5
        }
    }
};
const items = {
    hidden: {
        opacity: 0,
        y: "10%"
    },
    show: {
        opacity: 1,
        y: "0%",
        transition: {
            duration: .4,
            ease: "easeIn"
        }
    }
};

const Header = () => {
    return (
        <>
            <HeaderWrapper>
                <NavWrapper>
                    <NavLeft>
                        <img src="/images/logo.svg" alt="This is LOGO" />
                        <ul>
                            <li>
                                <Button name="Features" />
                            </li>
                            <li>
                                <Button name="Resources" />
                            </li>
                            <li>
                                <Button name="Pricing" />
                            </li>
                        </ul>
                    </NavLeft>
                    <MobileNav>
                        &nbsp;
                    </MobileNav>
                </NavWrapper>
            </HeaderWrapper>
            <HeroWrapper
                variants={container}
                initial="hidden"
                animate="show"
            >
                <motion.h1
                    variants={items}
                >
                    More than just<br />shorter links
                </motion.h1>
                <motion.p
                //    variants={items}
                >

                    {/* Build your brand’s recognition and get detailed insights 
  					on how your links are performing. */}
                    <img src="/images/people working.png" alt="This is LOGO" />
                </motion.p>
                {/* <Button variants={items} name="Get started" bgcolor="true" padding="1rem 2.5rem" hover="true"/> */}
            </HeroWrapper>
        </>
    )
}

export default Header;