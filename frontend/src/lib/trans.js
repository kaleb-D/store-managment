// TransitionWrapper.js
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const TransitionWrapper = ({ children, location }) => {
    return (
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                classNames="fade"
                timeout={300}
            >
                {children}
            </CSSTransition>
        </TransitionGroup>
    );
};

export default TransitionWrapper;
