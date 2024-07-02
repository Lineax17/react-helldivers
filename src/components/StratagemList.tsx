import React from "react";
import StratagemSublist from "./StratagemSublist";

import StratagemJson from "../../stratagems.json"


interface StratagemListProps {
    subsectionList: typeof StratagemJson.subsections
}

const createSubsections = (subsectionList: typeof StratagemJson.subsections) => {
    const sublist = subsectionList.map(item =>
        <StratagemSublist sectionName={item.ship_compartment}></StratagemSublist>)

    return sublist
};


function StratagemList(stratagemListProps:StratagemListProps) {
    const subsectionList = stratagemListProps.subsectionList
    return <div>
        <h1>{'Stratagems'}</h1>

        {createSubsections(subsectionList)}
    </div>
}

/*
{createSubsections(subsections)}
<StratagemSublist sectionName={'Test'}></StratagemSublist>
<StratagemSublist sectionName={name}></StratagemSublist>
 */

export default StratagemList;