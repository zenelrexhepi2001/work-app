import React from 'react';
//styles
import {LoaderWrapper} from '../../styles/Loader.styles';
//assets
import SpinnerImg from '../../assets/images/loader.gif';


const Spinner = () => (
    <LoaderWrapper>
        <img src={SpinnerImg} alt=''/>
    </LoaderWrapper>
)

export default Spinner;