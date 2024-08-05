
import React from "react"

function Links (props) {
    return(
        <div id="Links">
            <h3>Links</h3>
            <div>
                <a href={props.github}>https://github.com/liza</a>
            </div>
            <div>
                <a href={props.linkedin}>https://www.linkedin.com/in/liza/</a>
            </div>
        </div>
    )
}

export default Links