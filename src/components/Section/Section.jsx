import {SectionWrap,Title } from "./Section.styled";
import PropTypes from 'prop-types';


export default function Section ({title, children}){
   
    return (
        <SectionWrap>
            <Title>{title}</Title>
            {children}
        </SectionWrap>

    )

}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};