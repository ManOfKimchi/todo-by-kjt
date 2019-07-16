import React, { Fragment } from 'react';

// 함수형 컴포넌트
const FunctionalComponentTemplate = ({paramData}) => {
    return (
        <Fragment>
            함수형 컴포넌트
            parameter 값: {paramData}
        </Fragment>
    );
};

export default FunctionalComponentTemplate;