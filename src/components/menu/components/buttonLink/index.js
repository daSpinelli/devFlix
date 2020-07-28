import React from './node_modules/react'

function ButtonLink(props) {
    /* props => {   className: "variável"
                    href: "variável" }
    */

    return (
        <a className = {props.className} href = {props.href}>
           {props.children}
        </a>
    );
}

export default ButtonLink;