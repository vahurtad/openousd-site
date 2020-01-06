import React, { useState } from "react"

import { ResponsiveSankey } from '@nivo/sankey'
import { Button } from 'react-bootstrap';
import ClearIcon from '@material-ui/icons/Clear';

function Sankey(props) {

    const [groupByRestricted, setGroupByRestricted] = useState(false);

    return (
        <div>
            <div><span>Group By:{' '}</span>
                <Button className="filter"
                        size="sm"
                        onClick={() => setGroupByRestricted(!groupByRestricted)}
                        active={groupByRestricted}>
                    Restricted
                </Button>
                <span className={groupByRestricted ? "show" : "d-none"}
                    onClick={() => setGroupByRestricted(!groupByRestricted)}>
                    <ClearIcon className="text-dark" />
                </span>
            </div>
            <div id="sankey-chart">
                <ResponsiveSankey
                    data={groupByRestricted ? props.restrictedData : props.data}
                    margin={{ top: 20, right: 200, bottom: 20, left: 240 }}
                    sort="descending"
                    align="justify"
                    colors={{ scheme: 'category10' }}
                    nodeOpacity={0.8}
                    nodeThickness={25}
                    nodeInnerPadding={3}
                    nodeSpacing={10}
                    nodeBorderWidth={0}
                    nodeBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.8 ] ] }}
                    linkOpacity={0.2}
                    linkHoverOthersOpacity={0.1}
                    enableLinkGradient={true}
                    labelPosition="outside"
                    labelOrientation="horizontal"
                    labelPadding={10}
                    labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1 ] ] }}
                    animate={true}
                    motionStiffness={140}
                    motionDamping={13}
                    tooltipFormat={value =>
                        `${Math.floor(Number(value)).toLocaleString("en-US",
                            {style: "currency",
                            currency: "USD",
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0})}`
                    }
                />
            </div>
        </div>
    )
}

export default Sankey