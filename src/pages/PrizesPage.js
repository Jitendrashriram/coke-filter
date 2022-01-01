import React from 'react'

function PrizesPage() {
    return (
        <div className="page prizes fl-col align-items just-center">
            <div className="prizes__header">
                <h2 className="dropcap">WIN</h2>
                <p className="text">
                    GrabFood codes up for grabs for the first 100 participants weekly.
                </p>
            </div>
            <p className="prizes__sub-header">
                Additional weekly prizes for the most number of likes!
            </p>

            <div className="table">
                <div className="table__row table__header">
                    <div className="table__cell">NAME</div>
                    <div className="table__cell">Participation Code</div>
                </div>
                <div className="table__row">
                    <div className="table__cell">Week 1 (10 - 23 Jan 2022)</div>
                    <div className="table__cell">Salmon Yu Sheng x Coke Bundle</div>
                </div>
                <div className="table__row">
                    <div className="table__cell">Week 2 (10 - 23 Jan 2022)</div>
                    <div className="table__cell">Salmon Yu Sheng x Coke Bundle</div>
                </div>
                <div className="table__row">
                    <div className="table__cell">Week 3 (24 Jan - 6 Feb 2022)</div>
                    <div className="table__cell">Coke Reunion Dinner</div>
                </div>
                <div className="table__row">
                    <div className="table__cell">Week 4 (24 Jan - 6 Feb 2022)</div>
                    <div className="table__cell">Coke Reunion Dinner</div>
                </div>
            </div>

        

        </div>

        
    )
}

export default PrizesPage
